import { Fingerprint } from "lucide-react";
import DashboardDropdown from "../dropdowns/DashboardDropdown";
import Dropdown from "../dropdowns/Dropdown";

const Header: React.FC<{ isDashboard: boolean }> = ({ isDashboard = false }) => {

  return (
    <header className="sticky top-0 flex h-20 w-full border-b bg-white border-gray-200 z-[99] dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between w-full px-3 py-3 lg:px-6">
        <div className="flex items-center justify-start flex-1">
          <Fingerprint size={24} className="text-blue-600" />
          <span className="ml-2 text-xl font-medium text-gray-700 dark:text-white">Service Finder App</span>
        </div>
        <>{isDashboard ? <DashboardDropdown /> : <Dropdown />}</>
      </div>
    </header>
  );
};

export default Header;
