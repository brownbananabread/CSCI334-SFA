import { Helmet } from "react-helmet-async";
import { Link }from "react-router";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>CSCI334 | 404 Not Found</title>
      </Helmet>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="flex flex-1 justify-center items-center relative w-full">
          <div className="p-20 relative flex flex-col items-center justify-center w-full max-w-4xl z-10">
          <h1 className="mb-4 font-semibold text-gray-800 dark:text-white/90 text-3xl">
              Not Found
          </h1>
          <h1 className="mt-4 font-semibold text-gray-800 dark:text-white/90 text-9xl">
              404
          </h1>
          <p className="mt-10 mb-10 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
            We can’t seem to find the page you are looking for!
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            Back to Home Page
          </Link>
          </div>
        </div>
      </div>
      <footer className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
          &copy; {new Date().getFullYear()} - CSCI334
      </footer>
    </>
  );
}
