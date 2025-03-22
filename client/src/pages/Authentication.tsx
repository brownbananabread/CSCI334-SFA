import ReigsterLoginForm from "../components/forms/RegisterLoginForm";
import { Link } from "react-router";
import { Fingerprint } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Auth() {
  return (
    <>
      <Helmet>
        <title>CSCI334 | Get Started</title>
      </Helmet>
      <div className="flex flex-col h-screen bg-white dark:bg-gray-900 relative">
        <div className="flex flex-1 p-6 sm:p-0 overflow-hidden">
          <div className="relative flex flex-col justify-center w-full lg:flex-row dark:bg-gray-900">
            <ReigsterLoginForm />
            <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
              <div className="relative flex items-center justify-center z-1">
                {/* <!-- ===== Common Grid Shape Start ===== --> */}
                <div className="flex flex-col items-center max-w-xs">
                  <div className="py-8 justify-center hidden lg:flex">
                    <Link to="/dashboard" className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded">
                        <Fingerprint />
                      </span>
                      <span className="ml-2 text-3xl font-medium text-white dark:text-white">Service Finder App</span>
                    </Link>
                  </div>
                  <p className="text-center text-gray-400 dark:text-white/60">
                    Description about our app and what we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
