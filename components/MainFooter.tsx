import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainFooter() {
  return (
    <div className="w-full">
      <div
        id="downloadApp"
        className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
            <div className="flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start">
              <Image
                alt="app download"
                width="300"
                height="240"
                decoding="async"
                className=""
                src="/images/part-1.png"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
                Get Your Daily Needs From Our Online Store
              </h3>
              <p className="text-base opacity-90">
                There are many products you will find in our shop, Choose your
                daily necessary product from our Online shop and get some
                special offers.
              </p>
              <div className="mt-8 flex mx-auto justify-center text-center">
                {/* <a
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.apple.com/app-store/"
                >
                  <Image
                    alt="app store"
                    loading="lazy"
                    width="0"
                    height="0"
                    className="w-full h-auto"
                    src="/apple.png"
                  />
                </a> */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://play.google.com/store/games"
                >
                  <Image
                    alt="play store"
                    loading="lazy"
                    width="120"
                    height="100"
                    src="/download-from-google-play.svg"
                  />
                </a>
              </div>
            </div>
            <div className="md:hidden lg:block">
              <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
                <Image
                  alt="app download"
                  width="250"
                  height="240"
                  className=""
                src="/images/part-2.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative  lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
          <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white dark:bg-zinc-900">
            <div className="mr-3">
              <i className="fa fa-shipping-fast text-emerald-600"></i>
            </div>
            <div className="">
              <span className="block text-sm font-medium leading-5">
                Free Shipping From $100
              </span>
            </div>
          </div>
          <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white dark:bg-zinc-900">
            <div className="mr-3">
              <i className="fa fa-phone-volume text-emerald-600"></i>
            </div>
            <div className="">
              <span className="block text-sm font-medium leading-5">
                24/7 Priority Support
              </span>
            </div>
          </div>
          <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white dark:bg-zinc-900">
            <div className="mr-3">
              <i className="fa fa-credit-card text-emerald-600"></i>
            </div>
            <div className="">
              <span className="block text-sm font-medium leading-5">
                Safe and Secure Payment
              </span>
            </div>
          </div>
          <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white dark:bg-zinc-900">
            <div className="mr-3">
              <i className="fa fa-gift text-emerald-600"></i>
            </div>
            <div className="">
              <span className="block text-sm font-medium leading-5">
                Latest Offers up to 20% off
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="border-t border-gray-100 w-full">
        <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
              <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                <h3 className="text-md font-bold mb-4 sm:mb-4 lg:mb-4 pb-0.5">
                  Our Company
                </h3>
                <ul className="text-sm flex flex-col space-y-1">
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="/careers"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="/terms"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                <h3 className="text-md font-bold mb-4 sm:mb-4 lg:mb-4 pb-0.5">
                  Our Locations
                </h3>
                <ul className="text-sm lg:text-15px flex flex-col space-y-1">
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="/"
                    >
                      California, US
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="/"
                    >
                      Beijing, CN
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="/"
                    >
                      Pretoria, SA
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="/"
                    >
                      Kyiv, UA
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                <h3 className="text-md font-bold mb-4 sm:mb-4 lg:mb-4 pb-0.5">
                  My Account
                </h3>
                <ul className="text-sm lg:text-15px flex flex-col space-y-1">
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="#"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="#"
                    >
                      My Orders
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="#"
                    >
                      Recent Orders
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      href="#"
                    >
                      Update Profile
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                <h3 className="text-md font-bold mb-4 sm:mb-4 lg:mb-4 pb-0.5">
                  Contact Us
                </h3>
                <p className="font-sans text-sm text-gray-600 mt-3">
                  1, GitHub Avenue, Internet City, Canada
                  <br />
                  <span> Tel : +1 (234) 567 9012</span>
                  <br />
                  <span> Email : sample@github.com</span>
                </p>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
                <div className="col-span-1">
                  <div>
                    <span className="text-base font-medium block mb-2 pb-0.5">
                      Follow Us
                    </span>
                    <ul className="text-sm flex">
                      <li className="flex items-center mr-3 transition ease-in-out duration-500">
                        <a
                          aria-label="Social Link"
                          rel="noreferrer"
                          target="_blank"
                          className="block text-center mx-auto text-gray-500 hover:text-white"
                          href="https://www.facebook.com/"
                        >
                          <i className="fab fa-facebook fa-2x"></i>
                        </a>
                      </li>
                      <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                        <a
                          aria-label="Social Link"
                          rel="noreferrer"
                          target="_blank"
                          className="block text-center mx-auto text-gray-500 hover:text-white"
                          href="https://twitter.com/"
                        >
                          <i className="fab fa-x-twitter fa-2x"></i>
                        </a>
                      </li>
                      <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                        <a
                          aria-label="Social Link"
                          rel="noreferrer"
                          target="_blank"
                          className="block text-center mx-auto text-gray-500 hover:text-white"
                          href="https://web.whatsapp.com/"
                        >
                          <i className="fab fa-whatsapp fa-2x text-emerald-500"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-1 text-center hidden lg:block md:block">
                  <div>
                    <p className="text-base font-medium block">
                      Call Us
                    </p>
                    <h5 className="text-2xl font-bold text-emerald-500">
                      +1 (234) 567 9012
                    </h5>
                  </div>
                </div>
                <div className="col-span-1 hidden lg:block md:block">
                  <ul className="lg:text-right">
                    <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                      <Image
                        alt=""
                        loading="lazy"
                        width="146"
                        height="173"
                        decoding="async"
                        className="w-full"
                        src="/images/part-4.png"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-2xl px-3 sm:px-10 text-center py-4 flex flex-col md:flex-row md:justify-between">
            <p className="text-sm text-gray-500 leading-6">
              &copy; 2025, 
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 ml-1"
                href="/"
              >
                Our Shop
              </Link>
              , All rights reserved.
            </p>
            <div>
              <Link
              className="py-2 text-sm font-medium hover:text-emerald-600"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <span className="mx-1">
              &middot;
            </span>
            <Link
              className="py-2 text-sm font-medium hover:text-emerald-600"
              href="/terms-and-conditions"
            >
              Terms &amp; Conditions
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
