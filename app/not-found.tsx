import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <MainHeader />
      <main className="min-h-screen flex items-center bg-white justify-center dark:from-zinc-900 dark:to-zinc-800 px-4">
        <div className="max-w-lg w-full text-center">
          <div className="relative mb-8">
            <div className="text-[150px] sm:text-[200px] font-bold text-gray-100 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                <svg
                  className="w-12 h-12 text-primary-600 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Sorry, we {"couldn't"} find the page {"you're"} looking for. The page may
            have been moved or {"doesn't"} exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-200 hover:bg-emerald-300 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-white font-medium br-15 transition-colors"
              href="/search"
            >
              <i className="fa fa-home mr-1"></i>
              Go to Home
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            Need help?
            <Link
              className="text-primary-600 hover:text-primary-700 underline ml-1"
              href="/contact"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </main>
      <MainFooter />
    </div>
  );
};

export default NotFound;
