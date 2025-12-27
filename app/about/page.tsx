import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import Image from "next/image";
import React from "react";

export async function generateMetadata({}) {
  return {
    title: `About Us - GlobalSpace`,
    description: `About GlobalSpace`,
  };
}

export default function page() {
  return (
    <div>
      <MainHeader />
      <main className="bg-gray-50 dark:bg-zinc-900 z-10">
        <div>
          <div
            className="flex justify-center py-5 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom"
            style={{ backgroundImage: "url('/images/pageheaderimg.jpg')" }}
          >
            <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
              <div className="w-full flex justify-center flex-col relative">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-black text-center">
                  About Us
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 text-black">
            <div className="max-w-screen-2xl mx-auto lg:py-10 py-10 px-4 sm:px-10">
              <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
                <div className="">
                  <h3 className="text-xl lg:text-3xl mb-2 font-bold">
                    Welcome to our our online shop
                  </h3>
                  <div className="mt-3 text-base opacity-90">
                    <p className="text-justify">
                      {"We're"} building a smarter way to shop online.
                      <br />
                      Our e-commerce platform was created to connect customers
                      with high-quality products from trusted sellers - quickly,
                      securely, and seamlessly. We believe online shopping
                      should be simple, transparent, and enjoyable, no matter
                      where you are in the world.
                      <br />
                      From discovery to delivery, our app is designed with the
                      user in mind. We combine intuitive design, reliable
                      technology, and secure payments to ensure every
                      transaction is smooth and worry-free.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 dark:text-gray-500 xl:gap-6 mt-8">
                    <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                      <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                        8K
                      </span>
                      <h4 className="text-lg font-bold mb-1">
                        Active Customers
                      </h4>
                      <p className="mb-0 opacity-90">
                        Competently productize virtual models without
                        performance.
                      </p>
                    </div>
                    <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                      <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                        12K
                      </span>
                      <h4 className="text-lg font-bold mb-1">
                        Listed Products
                      </h4>
                      <p className="mb-0 opacity-90">
                        Dynamically morph team driven partnerships after
                        vertical
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <Image
                    alt="logo"
                    loading="lazy"
                    width="920"
                    height="750"
                    src="/images/staticimg-1.jpg"
                  />
                </div>
              </div>
              <div className="mt-10 lg:mt-16 text-base opacity-90 flex grid md:grid-cols-2 gap-6 lg:grid-cols-2 dark:text-gray-500 xl:gap-6 mt-8">
                <section className="max-w-4xl text-gray-800">
                  <h3 className="text-xl font-bold mb-3">What We Do</h3>

                  <ul className="list-disc pl-6 text-gray-700">
                    <li>
                      Curate and list quality products across multiple
                      categories
                    </li>
                    <li>
                      Enable fast, secure checkout and real-time order tracking
                    </li>
                    <li>
                      Support sellers with tools to manage products and orders
                    </li>
                    <li>
                      Improve the shopping experience using data and feedback
                    </li>
                  </ul>
                </section>
                <section className="max-w-4xl text-gray-800">
                  <h3 className="text-xl font-bold mb-3">Why Choose Us</h3>

                  <ul className="list-disc pl-6 text-gray-700">
                    <li>
                      User-first experience with clean and intuitive design
                    </li>
                    <li>Secure payments and protected transactions</li>
                    <li>Verified sellers and transparent reviews</li>
                    <li>Scalable platform built for global growth</li>
                  </ul>
                </section>
              </div>
              <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
                <Image
                  alt="logo"
                  loading="lazy"
                  // width="1001"
                  // height="570"
                  width={1920}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                  className="block rounded-lg"
                  src="/images/home-slider-2.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
