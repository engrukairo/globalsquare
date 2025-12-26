import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainHeader() {
  return (
    <div className="sticky z-20 top-0 w-full">
      <div className="hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium flex justify-between items-center">
            <span className="flex items-center">
              <i className="fa fa-phone"></i>
              We are available 24/7, Need help?
              <a
                href="tel:+1 (234) 567 9012"
                className="font-bold text-emerald-500 ml-1"
              >
                +1 (234) 567 9012
              </a>
            </span>
            <div className="lg:text-right flex items-center navBar">
              <div>
                <Link
                  className="font-medium hover:text-emerald-600"
                  href="/about"
                >
                  About Us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <div>
                <Link
                  className="font-medium hover:text-emerald-600"
                  href="/contact"
                >
                  Contact Us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <Link
                className="font-medium hover:text-emerald-600"
                href="/my-account"
              >
                My Account
              </Link>
              <span className="mx-2">|</span>
              <Link
                className="flex items-center font-medium hover:text-emerald-600"
                href="/login"
              >
                <span className="mr-1"></span>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header className="bg-emerald-500 shadow">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 lg:divide-y lg:divide-gray-200">
          <div className="relative flex h-18 justify-between">
            <div className="relative z-10 hidden sm:flex px-2 lg:px-0">
              <Link className="flex flex-shrink-0 items-center" href="/">
                <Image
                  className="h-13 w-auto"
                  src="/images/logo3.png"
                  alt="GlobalSquare"
                  width="140"
                  height="140"
                />
              </Link>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-10 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                  <div className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full">
                    <label className="flex items-center py-0.5">
                      <input
                        className="flex border px-4 py-3 placeholder:text-gray-400 placeholder:text-sm focus:bg-white focus:border-emerald-500 focus:ring-emerald-500/20 hover:border-gray-300 border-gray-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-gray-100 read-only:cursor-not-allowed read-only:bg-gray-100 read-only:text-gray-500 file:text-foreground file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-sm file:font-medium form-input w-full pl-5 appearance-none transition ease-in-out text-sm text-gray-700 font-sans rounded-md h-9 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none"
                        placeholder="Search for products (e.g. shirt, TV)"
                      />
                    </label>
                    <button
                      aria-label="Search"
                      className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:relative lg:z-10 sm:flex sm:items-center hidden">
              <button
                type="button"
                className="relative flex-shrink-0 rounded-full text-gray-200 p-1 mx-2 hover:text-white focus:outline-none"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
              <button
                type="button"
                aria-label="Notification"
                className="relative flex-shrink-0 rounded-full text-gray-200 p-1 mx-2 hover:text-white focus:outline-none"
              >
                <i className="fa fa-bell"></i>
              </button>
              <span
                className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                aria-hidden="true"
              ></span>
              <div className="relative ml-4 flex-shrink-0">
                <div className="relative">
                  <Link
                    className="-m-1.5 flex items-center p-1.5 text-gray-200"
                    href="/login"
                  >
                    <span className="sr-only">Open user menu</span>
                    <i className="fa fa-user"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="hidden lg:block xl:block bg-white border-b...">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center shadow-lg">
          <div className="inline-flex">
            <div className="relative">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                  <nav
                    className="md:flex space-x-10 items-center"
                  >
                    <Link
                      className=" mx-4 py-1 br-20 text-sm font-medium hover:text-emerald-600 bg-emerald-100 px-4 text-emerald-600"
                      href="/shop"
                    >
                      Go to Shop
                    </Link>
                    <Link
                      className="relative inline-flex items-center bg-red-100 py-1 px-4 br-20 text-sm font-medium text-red-500 hover:text-emerald-600"
                      href="/offers"
                    >
                      Offers
                      <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </div>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link
              className="mr-2 py-2 text-sm font-medium hover:text-emerald-600"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="ml-2 py-2 text-sm font-medium hover:text-emerald-600"
              href="/terms-and-conditions"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full"></div>
      <footer className="sm:hidden fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10">
        <button
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        >
          <span className="text-xl text-white">
            <i className="fa fa-bars"></i>
          </span>
        </button>
        <Link
          className="text-xl text-white"
          href="/"
        >
          <i className="fa fa-home"></i>
        </Link>
        <button className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg">
          <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
            0
          </span>
          <i className="fa fa-shopping-basket"></i>
        </button>
        <button
          type="button"
          className="text-xl text-white indicator justify-center"
        >
          <Link href="/auth/login"><i className="fa fa-user"></i></Link>
        </button>
      </footer>
    </div>
  );
}
