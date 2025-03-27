import PageBreadcrumb from "../../components/common/BreadCrumb";
import { Helmet } from "react-helmet-async";
import BasicTableOne from "../../components/BasicTable";

export default function Blank() {
  return (
    <div>
      <Helmet>
        <title>CSCI334 | Recent Activity</title>
      </Helmet>
      <PageBreadcrumb pageTitle="Recent Activity" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="w-full text-center">
          <h3 className="mb-10 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Recent Activity Element
          </h3>

          <BasicTableOne />
        </div>
      </div>
    </div>
  );
}
