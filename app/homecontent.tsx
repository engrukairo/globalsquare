"use client";

import HomeSlider from "@/components/HomeSlider";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type homeData = {
  id: number;
  name: string;
  email: string;
  product_name: string;
  product_slug: string;
  product_img: string;
  product_price: string;
  reviewRating: string;
  reviewCount: string;
};
export default function HomeContent() {
  const router = useRouter();
  const [usertoken, setUsertoken] = useState<string>("xxx");
  const [myusername, setMyUsername] = useState<string | null>("");
  const [popularproducts, setPopularproducts] = useState<homeData[]>([]);
  const [latestproducts, setLatestproducts] = useState<homeData[]>([]);

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getHomeData = async (token: string) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/proxy", {
        endpoint: "gethomedata",
        payload: null,
        method: "POST",
        token: token,
      });

      console.log(response.data);
      setLoading(false);
      const status = response.data?.status;

      if (status === 200) {
        setPopularproducts(response.data.popularproducts);
        setLatestproducts(response.data.latestproducts);
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
  
  return (
    <div>
      <MainHeader />
      <main className="bg-gray-50 dark:bg-zinc-900 z-10">
        <div className="min-h-screen dark:bg-zinc-900">
          <button aria-label="Cart" className="absolute">
            <div className="right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block">
              <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700">
                <span className="text-2xl mb-1 text-emerald-600"></span>
                <span className="px-2 text-sm  font-medium">0 Items</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-emerald-700 p-2 text-white text-base  font-medium rounded-bl-lg mx-auto">
                $0.00
              </div>
            </div>
          </button>
          <div className="bg-white dark:bg-zinc-900">
            <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
              <div className="flex w-full">
                <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                  <HomeSlider />
                </div>
                <div className="w-full hidden lg:flex ">
                  <div className="w-full group">
                    <div className="bg-gray-50 dark:bg-slate-600 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow br-15">
                      <div className="bg-orange-100 dark:bg-slate-600 dark:text-gray-200 text-gray-900 px-6 py-2 rounded-t border-b... flex items-center justify-center" style={{borderTopRightRadius: 15, borderTopLeftRadius: 15}}>
                        <h3 className="text-base font-medium ">
                          Latest Super Discount Active Coupon Codes
                        </h3>
                      </div>
                      <div className="overflow-hidden">
                        <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white dark:bg-zinc-700 rounded-md shadow">
                          <div className="tengah py-2 px-3 flex items-center justify-items-start">
                            <figure>
                              <Image
                                alt="August Gift Voucher"
                                loading="lazy"
                                width="100"
                                height="100"
                                decoding="async"
                                className="rounded-lg"
                                src="/images/part-1.png"
                              />
                            </figure>
                            <div className="ml-3">
                              <div className="flex items-center">
                                <h6 className="pl-1 text-base font-medium text-gray-600 dark:text-gray-200">
                                  <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                                    <span>50%</span>
                                  </span>{" "}
                                  Off
                                </h6>
                                <div className="ml-2">
                                  <span className="text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100 dark:bg-red-200">
                                    Inactive
                                  </span>
                                </div>
                              </div>
                              <h2 className="pl-1 text-base text-gray-700 dark:text-gray-200 leading-6 font-semibold mb-2">
                                August Gift Voucher
                              </h2>
                              <span className="inline-block mb-2">
                                <div className="flex items-center font-semibold">
                                  <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                                    00
                                  </span>
                                  :
                                  <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                                    00
                                  </span>
                                  :
                                  <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                                    00
                                  </span>
                                  :
                                  <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                                    00
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                            <div className="info flex items-center">
                              <div className="w-full">
                                <div className="block">
                                  <div className=" border border-dashed bg-emerald-50 py-1 border-emerald-300 br-99 text-center block">
                                    <button className="block w-full">
                                      <span className="uppercase font-semibold text-sm text-emerald-600">
                                        AUGUST24
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <p className="text-xs leading-4 text-gray-500 dark:text-gray-300 mt-2">
                                  * This coupon apply when shopping more then{" "}
                                  <span className="font-bold">$2000</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white dark:bg-zinc-700 rounded-md shadow">
                          <div className="tengah py-2 px-3 flex items-center justify-items-start">
                            <figure>
                              <Image
                                alt="Summer Gift Voucher"
                                loading="lazy"
                                width="100"
                                height="100"
                                decoding="async"
                                className="rounded-lg"
                                src="/images/part-2.png"
                              />
                            </figure>
                            <div className="ml-3">
                              <div className="flex items-center">
                                <h6 className="pl-1 text-base font-medium text-gray-600 dark:text-gray-200">
                                  <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                                    <span>10%</span>
                                  </span>{" "}
                                  Off
                                </h6>
                                <div className="ml-2">
                                  <span className="text-emerald-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-emerald-100 dark:bg-emerald-200">
                                    Active
                                  </span>
                                </div>
                              </div>
                              <h2 className="pl-1 text-base text-gray-700 dark:text-gray-200 leading-6 font-semibold mb-2">
                                Summer Gift Voucher
                              </h2>
                              <span className="inline-block mb-2">
                                <div className="flex items-center font-semibold">
                                  <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                                    00
                                  </span>
                                  :
                                  <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                                    00
                                  </span>
                                  :
                                  <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                                    00
                                  </span>
                                  :
                                  <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                                    00
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                            <div className="info flex items-center">
                              <div className="w-full">
                                <div className="block">
                                  <div className=" border border-dashed bg-emerald-50 py-1 border-emerald-300 br-99 text-center block">
                                    <button className="block w-full">
                                      <span className="uppercase font-semibold text-sm text-emerald-600">
                                        SUMMER24{" "}
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">
                                  * This coupon apply when shopping more than
                                  <span className="font-bold">$1000</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-orange-100 px-10 py-6 br-15 mt-6 dark:bg-slate-600">
                <div className="flex-col md:flex-row md:justify-between items-center flex">
                  <div>
                    <h1 className=" text-xl">
                      <span className="text-emerald-600 dark:text-gray-200 font-bold">
                        100% Natural Quality Organic Product
                      </span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-5 md:mb-0">
                      See Our latest discounted products from here and get a
                      special discount product
                    </p>
                  </div>
                  <a
                    className="text-sm  font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700"
                    href="/shop"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-zinc-800 lg:py-16 py-10">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-semibold">
                    Featured Categories
                  </h2>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-6">
                    Choose your necessary products from this feature categories.
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Fish &amp; Meat
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 "></span>
                              John
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 "></span>
                              Fish
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 "></span>
                              Meat
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Fruits &amp; Vegetable
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 "></span>
                              Baby Food
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 "></span>
                              Fresh Fruits
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 "></span>
                              Dry Fruits
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Cooking Essentials
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 "></span>
                              Flour
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 "></span>
                              Oil
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Biscuits &amp; Cakes
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Biscuits
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Cakes
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Household Tools
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Water Filter
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Cleaning Tools
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Pest Control
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Pet Care
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Dog Care
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Cat Care
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Beauty &amp; Healths
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Women
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Men
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Jam &amp; Jelly
                        </h3>
                        <ul className="pt-1 mt-1"></ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Milk &amp; Dairy
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Butter &amp; Ghee
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Ice Cream
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Dairy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Drinks
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Tea
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Water
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Juice
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex w-full h-full border border-gray-100 dark:border-gray-950 shadow-sm bg-white dark:bg-zinc-900 p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                    <div className="flex items-center">
                      <div>
                        <Image
                          alt="category"
                          loading="lazy"
                          width="35"
                          height="35"
                          decoding="async"
                          src="/aaa.png"
                        />
                      </div>
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover">
                          Breakfast
                        </h3>
                        <ul className="pt-1 mt-1">
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Bread
                            </a>
                          </li>
                          <li className="pt-1">
                            <a className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-gray-400 cursor-pointer">
                              <span className="text-xs text-gray-400 ">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeMiterlimit="10"
                                    strokeWidth="48"
                                    d="m184 112 144 144-144 144"
                                  ></path>
                                </svg>
                              </span>
                              Cereal
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2  font-semibold">
                  Popular Products for Daily Shopping
                </h2>
                <p className="text-base font-sans text-gray-600 dark:text-gray-400 leading-6">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {popularproducts.length > 0 ? (
                    <>
                      {popularproducts.map((product, index) => (
                        <div
                          key={index}
                          className="group relative flex flex-col overflow-hidden rounded-xl border bg-white border-gray-100 transition-all duration-100 ease-in-out hover:border-emerald-500 cursor-pointer shadow"
                        >
                          <div className="w-full flex justify-between"></div>
                          <div className="relative w-full min-h-48 lg:h-48 xl:h-52">
                            <Link
                              className="relative block w-full h-full overflow-hidden"
                              href={`/product/${product.product_slug}`}
                            >
                              <Image
                                alt="product"
                                loading="lazy"
                                decoding="async"
                                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 br-20"
                                sizes="100%"
                                width="100"
                                height="100"
                                src={`/images/products/${product.product_img}`}
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: 0,
                                  objectFit: "contain",
                                }}
                              />
                            </Link>
                            <div className="absolute lg:bottom-0 bottom-4 lg:group-hover:bottom-4 inset-x-1 opacity-100 flex justify-center lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible transition-all">
                              <button
                                aria-label="quick view"
                                className="relative h-auto inline-flex items-center cursor-pointer justify-center rounded-full transition-colors text-xs py-2 px-4 bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:text-emerald-500 hover:bg-gray-100 dark:hover:bg-slate-800 shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-emerald-600 dark:focus:ring-offset-0"
                              >
                                <i className="fa fa-expand-arrows-alt"></i>
                                <span className="ms-1 hidden xl:block lg:block">
                                  Quick View
                                </span>
                              </button>
                            </div>
                            <div className="absolute bottom-3 right-3 z-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-emerald-500">
                              <button
                                aria-label="cart"
                                className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer border-2 bg-emerald-700 text-white border-gray-10 font-medium transition-colors duration-300 hover:border-accent hover:bg-emerald-800 hover:border-emerald-800 hover:text-gray-50 focus:border-emerald-500 focus:bg-emerald-500 focus:text-gray-50"
                              >
                                <i className="fa fa-shopping-basket"></i>
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col space-y-2 px-4 pt-2 pb-4 bg-gray-200">
                            <div className="relative mb-1">
                              <Link
                                className="text-sm font-medium text-gray-800 line-clamp-1 hover:text-emerald-500"
                                href={`/product/${product.product_slug}`}
                              >
                                {product.product_name}
                              </Link>
                            </div>
                            <div className="flex gap-0.5 items-center">
                              <div className="flex items-center space-x-1">
                                <div className="flex items-center">
                                  <i className="far fa-star fs-12"></i>
                                </div>
                                <div className="text-xs ml-1 text-gray-400">
                                  <span className="font-medium">
                                    {product.reviewRating}
                                  </span>
                                  <span> ({product.reviewCount} reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div className="product-price font-bold">
                              <span className="inline-block text-base text-gray-900">
                                ${product.product_price}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="block mx-auto max-w-screen-2xl bg-white">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
              <div className="lg:p-16 p-6 bg-emerald-500 shadow-sm text-black br-20">
                <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 br-15">
                  <div className="flex justify-between items-center">
                    <div className="lg:w-3/5">
                      <span className="text-base lg:text-lg">
                        Organic Products and Food
                      </span>
                      <h2 className=" text-lg lg:text-2xl font-bold mb-1">
                        Quick Delivery to Your Home
                      </h2>
                      <p className="text-sm font-sans leading-6">
                        There are many products you will find in our shop,
                        Choose your daily necessary product from our online shop
                        and get some special offers. See Our latest discounted
                        products from here and get a special discount.
                      </p>
                      <a
                        className="lg:w-1/3  text-xs  font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white contact-btn"
                        target="_blank"
                        href="#"
                      >
                        Download App
                      </a>
                    </div>
                    <div className="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
                      <Image
                        alt="Quick Delivery to Your Home"
                        loading="lazy"
                        width="150"
                        height="120"
                        className="block"
                        src="/download-from-google-play.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="discount"
            className="bg-gray-50 dark:bg-zinc-800 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
          >
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2  font-semibold">
                  Latest Discounted Products
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See Our latest discounted products below. Choose your daily
                  needs from here and get a special discount with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {latestproducts.map((product, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col overflow-hidden rounded-xl border bg-white border-gray-100 transition-all duration-100 ease-in-out hover:border-emerald-500 cursor-pointer shadow"
                    >
                      <div className="w-full flex justify-between"></div>
                      <div className="relative w-full min-h-48 lg:h-48 xl:h-52">
                        <Link
                          className="relative block w-full h-full overflow-hidden"
                          href={`/product/${product.product_slug}`}
                        >
                          <Image
                            alt="product"
                            loading="lazy"
                            decoding="async"
                            className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 br-20"
                            sizes="100%"
                            width="100"
                            height="100"
                            src={`/images/products/${product.product_img}`}
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              objectFit: "contain",
                            }}
                          />
                        </Link>
                        <div className="absolute lg:bottom-0 bottom-4 lg:group-hover:bottom-4 inset-x-1 opacity-100 flex justify-center lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible transition-all">
                          <button
                            aria-label="quick view"
                            className="relative h-auto inline-flex items-center cursor-pointer justify-center rounded-full transition-colors text-xs py-2 px-4 bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:text-emerald-500 hover:bg-gray-100 dark:hover:bg-slate-800 shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-emerald-600 dark:focus:ring-offset-0"
                          >
                            <i className="fa fa-expand-arrows-alt"></i>
                            <span className="ms-1 hidden xl:block lg:block">
                              Quick View
                            </span>
                          </button>
                        </div>
                        <div className="absolute bottom-3 right-3 z-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-emerald-500">
                          <button
                            aria-label="cart"
                            className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer border-2 bg-emerald-700 text-white border-gray-10 font-medium transition-colors duration-300 hover:border-accent hover:bg-emerald-800 hover:border-emerald-800 hover:text-gray-50 focus:border-emerald-500 focus:bg-emerald-500 focus:text-gray-50"
                          >
                            <i className="fa fa-shopping-basket"></i>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col space-y-2 px-4 pt-2 pb-4 bg-gray-200">
                        <div className="relative mb-1">
                          <Link
                            className="text-sm font-medium text-gray-800 line-clamp-1 hover:text-emerald-500"
                            href={`/product/${product.product_slug}`}
                          >
                            {product.product_name}
                          </Link>
                        </div>
                        <div className="flex gap-0.5 items-center">
                          <div className="flex items-center space-x-1">
                            <div className="flex items-center">
                              <i className="far fa-star fs-12"></i>
                            </div>
                            <div className="text-xs ml-1 text-gray-400">
                              <span className="font-medium">
                                {product.reviewRating}
                              </span>
                              <span> ({product.reviewCount} reviews)</span>
                            </div>
                          </div>
                        </div>
                        <div className="product-price font-bold">
                          <span className="inline-block text-base text-gray-900">
                            ${product.product_price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
