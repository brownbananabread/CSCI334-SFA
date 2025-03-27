import { Link } from "react-router"; // Corrected import
import { Fingerprint } from "lucide-react";
import Dropdown from "./Dropdown"; // Corrected import
import { useProfile } from "../../context/ProfileContext";

const DashboardHeader: React.FC = () => { // Fixed `False` to `false`

  const { profile } = useProfile(); // Renamed variable to avoid shadowing

  return (
    <header className={`${profile?.isBusiness ? "lg:hidden" : ""} sticky px-5 top-0 flex h-20 w-full border-b bg-white border-gray-200 z-[99998] dark:border-gray-800 dark:bg-gray-900`}>
      <div className="flex items-center justify-between w-full">
      {/* Mobile Branding */}
      <div className="flex-1 flex justify-start">
        <Link to="/dashboard" className="flex items-center">
        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded">
          <Fingerprint />
        </span>
        <span className="ml-2 text-xl font-medium text-gray-900 dark:text-white">
          Service Finder App
        </span>
        </Link>
      </div>

      <Dropdown/>
      </div>
    </header>
  );
};

export default DashboardHeader;
