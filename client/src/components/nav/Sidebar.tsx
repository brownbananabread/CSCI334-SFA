import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { Fingerprint } from "lucide-react";
import Input from "../ui/InputField";
import Membership from "../ui/Membership";
import { useProfile } from "../../context/ProfileContext";

// Assume these icons are imported from an icon library
import {
  Box,
  Calendar1,
  ChevronRightIcon,
  GridIcon,
  ListIcon,
  PieChartIcon,
  UserCircleIcon,
} from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; beta?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon size={18}/>,
    name: "Dashboard",
    subItems: [
      { name: "Home", path: "/dashboard", beta: true },
      { name: "Ecommerce", path: "/dashboard/ecommerce", new: true },
    ],
  },
  {
    icon: <Calendar1 size={18}/>,
    name: "Calendar",
    path: "/dashboard/calendar",
  },
  {
    icon: <UserCircleIcon size={18}/>,
    name: "About",
    path: "/about",
  },
  {
    icon: <UserCircleIcon size={18}/>,
    name: "Documentation",
    path: "/documentation",
  },
  {
    name: "Forms",
    icon: <ListIcon size={18}/>,
    subItems: [
      { name: "Form Elements", path: "/dashboard/form-elements", beta: false },
      { name: "Basic Tables", path: "/dashboard/basic-tables", beta: false },
    ],
  },
  {
    icon: <PieChartIcon size={18}/>,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/dashboard/line-chart", beta: false },
      { name: "Bar Chart", path: "/dashboard/bar-chart", beta: false },
    ],
  },
  {
    icon: <Box size={18}/>,
    name: "UI Elements",
    subItems: [
      { name: "Buttons", path: "/dashboard/buttons", beta: false },
      { name: "Images", path: "/dashboard/images", beta: false },
      { name: "Videos", path: "/dashboard/videos", beta: false },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered, toggleMobileSidebar } = useSidebar();
  const location = useLocation();
  const { profile } = useProfile();

  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});
  const subMenuRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  useEffect(() => {
    const updatedSubmenus: Record<number, boolean> = {};
    navItems.forEach((nav, index) => {
      if (nav.subItems?.some(subItem => isActive(subItem.path))) {
        updatedSubmenus[index] = true;
      }
    });
    setOpenSubmenus(prev => ({ ...prev, ...updatedSubmenus }));
  }, [location.pathname, isActive]);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderMenuItems = (items: NavItem[]) => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index)}
              className="relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm"
            >
              <span>{nav.icon}</span>
              {(isExpanded || isHovered || isMobileOpen) && <span>{nav.name}</span>}
              {(isExpanded || isHovered || isMobileOpen) && (
              <ChevronRightIcon
                className={`ml-auto w-5 h-5 transition-transform duration-200 ${openSubmenus[index] ? "rotate-90" : ""}`}
              />
              )}
            </button>
            ) : (
            nav.path && (
                <Link
                onClick={() => isMobileOpen && toggleMobileSidebar()}
                to={nav.path}
                className={`relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm ${isActive(nav.path) ? "text-brand-500 bg-brand-50" : "text-gray-900"}`}
                >
                <span>
                {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && <span>{nav.name}</span>}
                </Link>
              )
              )}

              {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div
                ref={(el) => {
                subMenuRefs.current[index] = el;
                }}
                className="overflow-hidden transition-all duration-300"
                style={{ height: openSubmenus[index] ? `${subMenuRefs.current[index]?.scrollHeight || "auto"}px` : "0px" }}
              >
                <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                  <Link
                    onClick={() => isMobileOpen && toggleMobileSidebar()}
                    to={subItem.path}
                    className={`relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-theme-sm font-medium ${isActive(subItem.path) ? "text-brand-500 bg-brand-50" : "text-gray-900"}`}
                  >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.beta && <span className="ml-auto block rounded-full px-2.5 py-0.5 text-xs font-medium uppercase text-brand-500 dark:text-brand-400 bg-brand-100 dark:bg-brand-500/20">beta</span>}
                        {subItem.new && <span className="ml-auto block rounded-full px-2.5 py-0.5 text-xs font-medium uppercase text-green-500 dark:text-green-400 bg-green-100 dark:bg-green-500/20">new</span>}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {isMobileOpen && <div className="fixed inset-0 bg-opacity-75 backdrop-blur-sm z-40 transition-opacity" onClick={toggleMobileSidebar}></div>}

      <aside
        className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"} ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div className="py-8 justify-center hidden lg:flex">
          <Link to="/dashboard" className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded">
              <Fingerprint />
            </span>
            <span className="ml-2 text-xl font-medium text-gray-900 dark:text-white">TailAdmin</span>
          </Link>
        </div>

        <div className="mt-10 lg:mt-0">
          <Input type="text" id="inputTwo" placeholder="Search..." />
        </div>

        <div className="flex flex-col overflow-y-auto h-[calc(100vh-150px)] duration-300 ease-linear no-scrollbar mt-6">
          <nav className="mb-6">
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-250px)]">
              <div>{renderMenuItems(navItems)}</div>
            </div>
            <div className={`${isMobileOpen || isExpanded ? "" : "hidden"} absolute bottom-16 lg:bottom-0 left-0 right-0 flex items-center justify-between gap-4 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800`}>
              <div>
              <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                {profile && profile.name ? profile.name : 'Loading...'}
              </span>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-500">
                {profile && profile.email ? profile.email : 'Loading...'}
              </span>
              </div>
              {profile && (
              <Membership premiumMembership={!!profile.sole_trader} />
              )}
            </div>
          </nav>
        </div>

      </aside>
    </>
  );
};

export default AppSidebar;

