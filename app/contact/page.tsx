import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <MainHeader />
      <main className="bg-gray-50 dark:bg-zinc-900 z-10">
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
          <div
            className="flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom" style={{ backgroundImage: "url('/images/pageheaderimg.jpg')" }}
          >
            <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
              <div className="w-full flex justify-center flex-col relative">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-black text-center">
                  Contact Us
                </h2>
              </div>
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto py-12 lg:py-20 px-4 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="group bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-zinc-700">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-envelope text-white fa-2x"></i>
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Email Us
                </h5>
                <a
                  href="mailto:example@github.com"
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
                >
                  example@github.com
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Interactively grow empowered for process-centric total
                  linkage.
                </p>
              </div>
              <div className="group bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-zinc-700">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-phone text-white fa-2x"></i>
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {"Let's"} Talk
                </h5>
                <a
                  href="tel:+1 (234) 567 9012"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  +1 (234) 567 9012
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Distinctively disseminate focused solutions clicks-and-mortar
                  ministate.
                </p>
              </div>
              <div className="group bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-zinc-700">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-map-marker-alt text-white fa-2x"></i>
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Supermarket Address
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  1, GitHub Avenue, Internet City, <br />
                  Canada
                </p>
              </div>
              <div className="group bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-zinc-700">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="far fa-clock text-white fa-2x"></i>
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Shop Open
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Monday - Sunday
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  9:00 AM - 10:00 PM
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 br-50 shadow-sm border border-gray-100 dark:border-zinc-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block relative bg-gradient-to-br from-emerald-500 to-teal-600 p-12">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <img
                      alt="Contact us"
                      loading="lazy"
                      width="500"
                      height="500"
                      className="w-full max-w-md mx-auto"
                      src="/_next/image?url=%2Fcontact-us.png&amp;w=1080&amp;q=75"
                    />
                    <div className="text-center mt-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {"We're"} Here to Help
                      </h3>
                      <p className="text-emerald-100">
                        Have a question or feedback? {"We'd"} love to hear from
                        you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="w-full">
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-6 h-6 text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                            For any suppoort just send your query
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Collaboratively promote client-focused convergence
                        vis-a-vis customer-directed alignments via plagiarized
                        strategic users and standardized infrastructures.
                      </p>
                    </div>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <i className="far fa-user"></i>
                            </div>
                            <input
                              id="name"
                              placeholder="John Doe"
                              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0.5 focus:ring-opacity-50 transition-all duration-200"
                              type="text"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Your Email <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <i className="fa fa-envelope"></i>
                            </div>
                            <input
                              id="email"
                              placeholder="john@example.com"
                              className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0.5 focus:ring-opacity-50 transition-all duration-200"
                              type="email"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <i className="far fa-folder"></i>
                          </div>
                          <input
                            id="subject"
                            placeholder="How can we help you?"
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0.5 focus:ring-opacity-50 transition-all duration-200"
                            type="text"
                            name="subject"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                            <i className="far fa-comment-alt"></i>
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Write your message here..."
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0.5 focus:ring-opacity-50 transition-all duration-200 resize-none"
                          ></textarea>
                        </div>
                      </div>
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold br-50 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none"
                        >
                          <i className="far fa-paper-plane"></i>
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
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
