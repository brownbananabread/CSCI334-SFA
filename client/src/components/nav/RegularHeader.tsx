import { Link } from "react-router";
import { Fingerprint } from "lucide-react";
import CustomerDropdown from "../dropdowns/CustomerDropdown";

const DashboardHeader: React.FC = () => {

  return (
    <header className="sticky top-0 flex h-20 w-full border-b bg-white border-gray-200 z-[99998] dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between w-full px-3 py-3 lg:px-6">
        
      <CustomerDropdown />

        {/* Mobile Branding */}
        <div className="flex-1 flex justify-center">
          <Link to="/dashboard" className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded">
              <Fingerprint />
            </span>
            <span className="ml-2 text-xl font-medium text-gray-900 dark:text-white">Service Finder App</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;