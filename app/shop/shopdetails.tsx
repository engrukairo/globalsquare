"use client";

import CategorySlider from "@/components/CategorySlider";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import Product from "@/components/Product";
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

export default function ShopDetails() {
  const router = useRouter();
  const [usertoken, setUsertoken] = useState<string>("xxx");
  const [recommendedProducts, setRecommendedProducts] = useState<homeData[]>(
    []
  );
  const [electronicsProducts, setElectronicsProducts] = useState<homeData[]>(
    []
  );
  const [fashionProducts, setFashionProducts] = useState<homeData[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getHomeData = async (token: string) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/proxy", {
        endpoint: "getshopdata",
        payload: null,
        method: "POST",
        token: token,
      });

      console.log(response.data);
      setLoading(false);
      const status = response.data?.status;

      if (status === 200) {
        setRecommendedProducts(response.data.recommendedproducts);
        setElectronicsProducts(response.data.electronicsproducts);
        setFashionProducts(response.data.fashionproducts);
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
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="flex py-10 lg:py-12">
            <div className="flex w-full">
              <div className="w-full">
                <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 mb-10">
                  <div className="mx-auto w-full relative br-20 overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl bg-emerald-800 aspect-[4/2]">
                    <Image
                      alt="Taste of"
                      width="550"
                      height="234"
                      className="absolute inset-0 w-full h-full object-contain object-center py-5"
                      src="/images/part-5.png"
                    />
                    <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center bg-black/50 h-full">
                      <div className="pt-4">
                        <h2 className=" text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                          Taste of <br />
                          <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                            Fresh &amp; Natural
                          </span>
                        </h2>
                        <p className="text-sm font-sans text-gray-50">
                          Weekend discount offer
                        </p>
                        <button className="hidden sm:block lg:block text-xs mx-auto leading-6  font-medium mt-4 px-4 py-1 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-600">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto w-full relative br-20 overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl bg-blue-800 aspect-[4/2]">
                    <Image
                      alt="Taste of"
                      width="550"
                      height="234"
                      className="absolute inset-0 w-full h-full object-contain object-center py-5"
                      src="/images/part-6.png"
                    />
                    <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center bg-black/50 h-full">
                      <div className="pt-4">
                        <h2 className=" text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                          Taste of <br />
                          <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                            Fish &amp; Meat
                          </span>
                        </h2>
                        <p className="text-sm font-sans text-gray-50">
                          Weekend discount offer
                        </p>
                        <button className="hidden sm:block lg:block text-xs mx-auto leading-6  font-medium mt-4 px-4 py-1 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-600">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto w-full relative br-20 overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl bg-emerald-800 aspect-[4/2]">
                    <Image
                      alt="Taste of"
                      width="550"
                      height="234"
                      className="absolute inset-0 w-full h-full object-contain object-center py-5"
                      src="/images/part-7.png"
                    />
                    <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center bg-black/50 h-full">
                      <div className="pt-4">
                        <h2 className=" text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                          Taste of <br />
                          <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                            Bread &amp; Bakery
                          </span>
                        </h2>
                        <p className="text-sm font-sans text-gray-50">
                          Weekend discount offer
                        </p>
                        <button className="hidden sm:block lg:block text-xs mx-auto leading-6  font-medium mt-4 px-4 py-1 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-600">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <CategorySlider />
                {recommendedProducts.length > 0 && (
                  <div className="category-listing">
                    <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                      <h6 className="text-sm font-bold">Recommended Items</h6>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                      {recommendedProducts.map((product, index)=>(
                        <Product key={index} details={product} />
                      ))}
                    </div>
                  </div>
                )}

                {electronicsProducts.length > 0 && (
                  <div className="category-listing">
                    <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                      <h6 className="text-sm font-bold">Electronics</h6>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                      {electronicsProducts.map((product, index)=>(
                        <Product key={index} details={product} />
                      ))}
                    </div>
                  </div>
                )}

                {fashionProducts.length > 0 && (
                  <div className="category-listing">
                    <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                      <h6 className="text-sm font-bold">Fashion Items</h6>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                      {fashionProducts.map((product, index)=>(
                        <Product key={index} details={product} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
