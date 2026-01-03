import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Toast from "./Toast";
import CartErrorModal from "./Modal";

type ApiErrors = Record<string, string[]>;

type productData = {
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

type ProductProps = {
  details: productData;
};

export default function Product({ details }: ProductProps) {
  const router = useRouter();
  const [purchaseid, setPurchaseID] = useState<string | null>("");
  const [APIErrors, setAPIErrors] = useState<ApiErrors | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const addToCart = async () => {
    try {
      const response = await axios.post("/api/proxy", {
        endpoint: "addtocart",
        payload: {
          product: details?.id,
          count: 1,
          purchaseid: purchaseid,
        },
        method: "POST",
        // token: usertoken,
      });

      console.log(response.data);
      const status = response.data?.status;

      if (status === 200) {
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

  return (
    <div>
      <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-white border-gray-100 transition-all duration-100 ease-in-out hover:border-emerald-500 cursor-pointer shadow">
        <div className="w-full flex justify-between"></div>
        <div className="relative w-full min-h-48 lg:h-48 xl:h-52">
          <Link
            className="relative block w-full h-full overflow-hidden"
            href={`/product/${details.product_slug}`}
          >
            <Image
              alt="product"
              loading="lazy"
              decoding="async"
              className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 br-20"
              sizes="100%"
              width="100"
              height="100"
              src={`/images/products/${details.product_img}`}
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
              onClick={addToCart}
            >
              <i className="fa fa-shopping-cart"></i>
              <span className="ms-1 hidden xl:block lg:block">Add to cart</span>
            </button>
          </div>
          <div className="absolute bottom-3 right-3 z-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-emerald-500">
            <button
              aria-label="cart"
              className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer border-2 bg-emerald-700 text-white border-gray-10 font-medium transition-colors duration-300 hover:border-accent hover:bg-emerald-800 hover:border-emerald-800 hover:text-gray-50 focus:border-emerald-500 focus:bg-emerald-500 focus:text-gray-50"
              onClick={addToCart}
            >
              <i className="fa fa-shopping-basket"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-2 px-4 pt-2 pb-4 bg-gray-200">
          <div className="relative mb-1">
            <Link
              className="text-sm font-medium text-gray-800 line-clamp-1 hover:text-emerald-500"
              href={`/product/${details.product_slug}`}
            >
              {details.product_name}
            </Link>
          </div>
          <div className="flex gap-0.5 items-center">
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                <i className="far fa-star fs-12"></i>
              </div>
              <div className="text-xs ml-1 text-gray-400">
                <span className="font-medium">{details.reviewRating}</span>
                <span> ({details.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
          <div className="product-price font-bold">
            <span className="inline-block text-base text-gray-900">
              ${details.product_price}
            </span>
          </div>
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
    </div>
  );
}
