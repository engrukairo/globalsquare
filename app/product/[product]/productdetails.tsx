"use client";

import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import CartErrorModal from "@/components/Modal";
import Product from "@/components/Product";
import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import Toast from "@/components/Toast";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type ApiErrors = Record<string, string[]>;

type productData = {
  id: number;
  name: string;
  email: string;
  product_name: string;
  product_slug: string;
  product_img: string;
  product_price: string;
  product_desc: string;
  reviewRating: string;
  reviewCount: string;
};

export default function Productdetails({ product }: { product: string }) {
  const router = useRouter();
  const [usertoken, setUsertoken] = useState<string>("xxx");
  const [myusername, setMyUsername] = useState<string | null>("");
  const [purchaseid, setPurchaseID] = useState<string | null>("");
  const [productDetails, setProductDetails] = useState<productData | null>(
    null
  );
  const [relatedProducts, setRelatedProducts] = useState<productData[]>([]);

  const [errors, setErrors] = useState<string[]>([]);
  const [APIErrors, setAPIErrors] = useState<ApiErrors | null>(null);
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const MIN = 1;
  const MAX = 50;

  const getHomeData = async (token: string) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/proxy", {
        endpoint: "getproductdata",
        payload: { product: product },
        method: "POST",
        token: token,
      });

      console.log(response.data);
      setLoading(false);
      const status = response.data?.status;

      if (status === 200) {
        setProductDetails(response.data.productdetails);
        setRelatedProducts(response.data.relatedproducts);
      } else if (status === 201) {
        // backend returned validation errors
        const backendErrors = response.data?.errors || [];
        if (Array.isArray(backendErrors)) {
          setErrors(backendErrors);
        } else {
          setErrors(["An unknown error occurred"]);
        }
      } else if (status === 401) {
        router.push("../login");
      } else {
        setErrors(["An unknown error occurred"]);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 401) {
          router.push("../login");
        }

        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const token = localStorage.getItem("gstoken");
      const purchaseid = localStorage.getItem("purchaseid");

      if (purchaseid) {
        setPurchaseID(purchaseid);
      }

      if (!token) {
        setUsertoken("Token Not Available"); // safe because inside async function
        getHomeData("Token Not Available");
      } else {
        setUsertoken(token); // safe because inside async function
        getHomeData(token);
      }
    };

    initialize();
  }, [router]);

  const [count, setCount] = useState(MIN);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startIncrement = () => {
    if (count >= MAX) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => (prev < MAX ? prev + 1 : prev));
    }, 120);
  };

  const startDecrement = () => {
    if (count <= MIN) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => (prev > MIN ? prev - 1 : prev));
    }, 120);
  };

  const stopChange = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const addToCart = async () => {
    try {
      const response = await axios.post("/api/proxy", {
        endpoint: "addtocart",
        payload: {
          product: productDetails?.id,
          count: count,
          purchaseid: purchaseid,
        },
        method: "POST",
        // token: usertoken,
      });

      console.log(response.data);
      setLoading(false);
      const status = response.data?.status;

      if (status === 200) {
        setCount(1);
        localStorage.setItem("purchaseid", response.data?.purchaseid);
        setPurchaseID(response.data?.purchaseid);
        showSuccess();
      } else if (status === 201) {
        setAPIErrors(response.data?.errors);
        setIsModalOpen(true);
      } else if (status === 401) {
        router.push("../login");
      } else {
        setErrors(["An unknown error occurred"]);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 401) {
          router.push("../login");
        }

        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const showSuccess = () => {
    setToast({
      show: true,
      message: "Product added to cart!",
      type: "success",
    });
  };

  const showError = () => {
    setToast({
      show: true,
      message: "Something went wrong.",
      type: "error",
    });
  };

  if (!productDetails) {
    return (<><MainHeader /><ProductDetailsSkeleton /><MainFooter/></>);
  }

  return (
    <div>
      <MainHeader />
      <main className="bg-gray-50 dark:bg-zinc-900 z-10">
        <div className="bg-white px-0">
          <div className="container mx-auto px-3 sm:px-10 max-w-screen-2xl">
            <div className="flex items-center py-6 lg:py-8">
              <ol className="flex items-center w-full overflow-hidden ">
                <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-sm mt-[1px]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </li>
                <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold ">
                  <a href="/search?category=fresh-vegetable&amp;_id=632aca374d87ff2494210bf0">
                    <button type="button">fresh-vegetable</button>
                  </a>
                </li>
                <li className="text-sm mt-[1px]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </li>
                <li className="text-sm px-1 transition duration-200 ease-in ">
                  {productDetails?.product_name}
                </li>
              </ol>
            </div>
            <div className="relative lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-4 lg:gap-y-8">
              <div className="lg:col-span-3 lg:row-end-1">
                <div className="overflow-hidden w-full mx-auto">
                  <Image
                    alt="product"
                    width="500"
                    height="500"
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
                    src={`/images/products/${productDetails?.product_img}`}
                  />
                </div>
              </div>
              <div className="lg:sticky top-44 mt-6 lg:mt-0 self-start z-10 mx-auto lg:col-span-4 lg:row-span-2 lg:row-end-2 lg:max-w-none">
                <div className="mb-2 md:mb-2.5 block -mt-1.5">
                  <div className="relative">
                    <span className="inline-flex items-center justify-center text-xs text-gray-400">
                      In stock:
                      {/* <span className="text-green-600 pl-1 font-normal">
                        361
                      </span> */}
                    </span>
                  </div>
                  <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold  text-gray-800">
                    {productDetails?.product_name}
                  </h1>
                  <div className="flex gap-0.5 items-center mt-1">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 text-yellow-400 fill-current"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 text-yellow-400 fill-current"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 text-yellow-400 fill-current"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 text-yellow-400 fill-current"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 text-gray-300"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <div className="text-xs ml-1 text-gray-400">
                        <span className="font-medium">4.0</span>
                        <span> ( reviews )</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <div className="product-price font-bold">
                    <span className="inline-block text-xl">
                      ${productDetails?.product_price}
                    </span>
                  </div>
                  <span className="ml-2 block"></span>
                </div>
                <div className="mb-6"></div>
                <div>
                  <div className="flex items-center mt-4">
                    <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                      <div>
                        <span className=" font-semibold py-1 text-sm d-block">
                          <span className="text-gray-700">Category:</span>
                          <a
                            className="cursor-pointer"
                            href="/search?category=fresh-vegetable&amp;_id=632aca374d87ff2494210bf0"
                          >
                            <button
                              type="button"
                              className="text-gray-600 font-medium ml-2 hover:text-teal-600"
                            >
                              fresh-vegetable
                            </button>
                          </a>
                        </span>
                        <div className="flex flex-row">
                          <span className="bg-gray-100 px-2 py-1 mr-2 border-0 text-gray-500 rounded inline-flex items-center justify-center text-xs mt-2">
                            fresh fruits
                          </span>
                          <span className="bg-gray-100 px-2 py-1 mr-2 border-0 text-gray-500 rounded inline-flex items-center justify-center text-xs mt-2">
                            fruits
                          </span>
                          <span className="bg-gray-100 px-2 py-1 mr-2 border-0 text-gray-500 rounded inline-flex items-center justify-center text-xs mt-2">
                            vegetable
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-[50%] max-w-sm rounded-xl border border-slate-300 bg-white overflow-hidden">
                      <div className="grid grid-cols-3 items-center text-center">
                        <button
                          onMouseDown={startDecrement}
                          onMouseUp={stopChange}
                          onMouseLeave={stopChange}
                          onTouchStart={startDecrement}
                          onTouchEnd={stopChange}
                          disabled={count === MIN}
                          className={`py-2 text-xl font-medium border-r border-slate-300
            ${
              count === MIN
                ? "text-slate-300 cursor-not-allowed"
                : "text-slate-600 hover:bg-slate-100"
            }
          `}
                        >
                          -
                        </button>

                        {/* Value */}
                        <div className="py-2 text-lg font-semibold text-emerald-600">
                          {count}
                        </div>

                        {/* Increment */}
                        <button
                          onMouseDown={startIncrement}
                          onMouseUp={stopChange}
                          onMouseLeave={stopChange}
                          onTouchStart={startIncrement}
                          onTouchEnd={stopChange}
                          disabled={count === MAX}
                          className={`py-2 text-xl font-medium border-l border-slate-300
            ${
              count === MAX
                ? "text-slate-300 cursor-not-allowed"
                : "text-slate-600 hover:bg-slate-100"
            }
          `}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-emerald-500 text-white hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-800 has-[&gt;svg]:px-3 text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent br-20 focus-visible:outline-none focus:outline-none px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 h-11 mt-4 w-[50%]"
                    onClick={addToCart}
                  >
                    Add to Cart
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                  <div className="flex items-center text-sm text-gray-500 mt-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 text-md"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                    Call Us for Order
                    <a
                      href="tel:+099949343"
                      className="font-bold text-emerald-500 ml-1"
                    >
                      +1 (234) 567 9012
                    </a>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <h3 className="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>
                    <div className="mt-4">
                      <ul className="my-0">
                        <li className="flex items-center py-2">
                          <span className="text-lg items-start mr-3">
                            <i className="fa fa-shipping-fast text-emerald-600"></i>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Free shipping applies to all orders over shipping
                            €100
                          </p>
                        </li>
                        <li className="flex items-center py-2">
                          <span className="text-lg text-gray-400 items-start mr-3">
                            <i className="fa fa-home text-emerald-600"></i>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Home Delivery within 1 Hour
                          </p>
                        </li>
                        <li className="flex items-center py-2">
                          <span className="text-lg text-gray-400 items-start mr-3">
                            <i className="fa fa-dollar-sign text-emerald-600"></i>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Cash on Delivery Available
                          </p>
                        </li>
                        <li className="flex items-center py-2">
                          <span className="text-lg text-gray-400 items-start mr-3">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="17 1 21 5 17 9"></polyline>
                              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                              <polyline points="7 23 3 19 7 15"></polyline>
                              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            7 Days returns money back guarantee
                          </p>
                        </li>
                        <li className="flex items-center py-2">
                          <span className="text-lg text-gray-400 items-start mr-3">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path>
                              <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path>
                              <line x1="1" y1="1" x2="23" y2="23"></line>
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Warranty not available for this item
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <h3 className="text-sm font-medium text-gray-900">
                      Share this product to your social network
                    </h3>
                    <ul
                      role="list"
                      className="mt-4 flex items-center space-x-6"
                    >
                      <li>
                        <button
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <a
                            href="#"
                            className="flex size-6 items-center justify-center text-gray-400 hover:text-emerald-500"
                          >
                            <span className="sr-only">Share on Facebook</span>
                            <i className="fab fa-facebook text-emerald-600"></i>
                          </a>
                        </button>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex size-7 items-center justify-center text-gray-400 hover:text-emerald-500"
                        >
                          <span className="sr-only">Share on Instagram</span>
                          <i className="fab fa-instagram text-emerald-600"></i>
                        </a>
                      </li>
                      <li>
                        <button
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <a
                            href="#"
                            className="flex size-6 items-center justify-center text-gray-400 hover:text-emerald-500"
                          >
                            <span className="sr-only">Share on X</span>
                            <i className="fab fa-x-twitter text-emerald-600"></i>
                          </a>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full lg:col-span-3 lg:my-0 my-8 lg:max-w-none">
                {/* <div>
                  <div className="border-b border-gray-200">
                    <div
                      className="-mb-px flex space-x-8"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      <button
                        className="cursor-pointer border-b-2 border-transparent pb-3 text-sm font-medium whitespace-nowrap text-gray-700 hover:border-gray-300 focus:outline-0 hover:text-gray-800 data-selected:border-emerald-600 data-selected:text-emerald-600"
                        id="headlessui-tabs-tab-_R_9n5fiv5udb_"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        // tabindex="0"
                        data-headlessui-state="selected"
                        aria-controls="headlessui-tabs-panel-_R_an5fiv5udb_"
                        data-selected=""
                      >
                        Description
                      </button>
                      <button
                        className="cursor-pointer border-b-2 border-transparent pb-3 text-sm font-medium whitespace-nowrap text-gray-700 hover:border-gray-300 focus:outline-0 hover:text-gray-800 data-selected:border-emerald-600 data-selected:text-emerald-600"
                        id="headlessui-tabs-tab-_R_5n5fiv5udb_"
                        role="tab"
                        type="button"
                        aria-selected="true"
                        // tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-_R_6n5fiv5udb_"
                      >
                        Customer Reviews
                      </button>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    id="headlessui-tabs-panel-_R_6n5fiv5udb_"
                    role="tabpanel"
                    aria-labelledby="headlessui-tabs-tab-_R_5n5fiv5udb_"
                    // tabindex="-1"
                    style={{
                      position: "fixed",
                      top: "1px",
                      left: "1px",
                      width: "1px",
                      height: "0px",
                      padding: "0px",
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      borderWidth: "0px",
                    }}
                  ></span>
                  <div
                    className="pt-8"
                    id="headlessui-tabs-panel-_R_an5fiv5udb_"
                    role="tabpanel"
                    aria-labelledby="headlessui-tabs-tab-_R_9n5fiv5udb_"
                    // tabIndex="0"
                    data-headlessui-state="selected"
                    data-selected=""
                  >
                    <h3 className="sr-only">Product Description</h3>
                    <p className="text-sm leading-6 text-gray-500 md:leading-6 mb-3">
                      Most fresh vegetables are low in calories and have a water
                      content in excess of 70 percent, with only about 3.5
                      percent protein and less than 1 percent fat. ... The root
                      vegetables include beets, carrots, radishes, sweet
                      potatoes, and turnips. Stem vegetables include asparagus
                      and kohlrabi.
                    </p>
                  </div>
                </div> */}

                <div className="flex gap-8 border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`relative pb-2 font-medium text-sm
            ${
              activeTab === "description"
                ? "text-emerald-600 focus:outline-0 "
                : "text-gray-700 hover:text-gray-800"
            }
          `}
                  >
                    Product Description
                    {activeTab === "description" && (
                      <span className="absolute left-0 -bottom-[1px] h-[2px] w-full rounded bg-emerald-600" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`relative pb-2 font-medium text-sm
            ${
              activeTab === "reviews"
                ? "text-emerald-600 focus:outline-0 "
                : "text-gray-700 hover:text-gray-800"
            }
          `}
                  >
                    Customer Reviews
                    {activeTab === "reviews" && (
                      <span className="absolute left-0 -bottom-[1px] h-[2px] w-full rounded bg-emerald-600" />
                    )}
                  </button>
                </div>

                <div className="py-4 text-gray-500 leading-6 min-h-[120px]">
                  {activeTab === "description" && (
                    <>
                      <p className="text-sm leading-6 text-gray-500 md:leading-6 mb-3">
                        {productDetails?.product_desc}
                      </p>
                    </>
                  )}

                  {activeTab === "reviews" && (
                    <>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Customer Reviews
                      </h2>
                      <p>No review yet.</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {relatedProducts.length > 0 && (
              <div className="pt-10 lg:pt-20 lg:pb-10">
                <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-3xl mb-6">
                  Related Products
                </h3>
                <div className="flex">
                  <div className="w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                      {relatedProducts.map((product, index) => (
                        <Product key={index} details={product} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <CartErrorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <h2 className="text-xl font-semibold mb-4">An error occured</h2>
          {APIErrors && (
            <div className="bg-red-100 text-red-700  p-3 rounded-lg space-y-1 text-center mt-4 space-y-1 text-sm text-red-600 my-3">
              {Object.values(APIErrors)
                .flat()
                .map((message, index) => (
                  <p key={index}>{message}</p>
                ))}
            </div>
          )}
        </CartErrorModal>
        <Toast
          show={toast.show}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast((prev) => ({ ...prev, show: false }))}
        />
      </main>
      <MainFooter />
    </div>
  );
}
