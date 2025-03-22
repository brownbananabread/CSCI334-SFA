import PageBreadcrumb from "../../components/common/BreadCrumb";
import { Helmet } from "react-helmet-async";

export default function Blank() {
  return (
    <div>
      <Helmet>
        <title>CSCI334 | Settings</title>
      </Helmet>
      <PageBreadcrumb pageTitle="Settings" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Settings
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Settings
          </p>
        </div>
      </div>
    </div>
  );
}
