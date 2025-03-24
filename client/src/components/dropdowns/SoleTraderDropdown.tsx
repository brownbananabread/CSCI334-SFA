import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Dropdown } from "../ui/dropdown/Dropdown";
import {
  File,
  MessageCircle,
  Headset,
  Fingerprint,
  Menu,
  X,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import Membership from "../ui/Membership";

// Full dashboard menu
const dashboardMenuItems = [
  { href: "/dashboard/profile", title: "Edit Profile", icon: User },
  { href: "/dashboard/settings", title: "Settings", icon: Settings },
  { isDivider: true },
  { href: "/about", title: "About", icon: Fingerprint },
  { href: "/contact", title: "Contact Us", icon: MessageCircle },
  { href: "/support", title: "Support", icon: Headset },
  { href: "/documentation", title: "Documentation", icon: File },
  { href: "/business", title: "Business Things", icon: File },
  { isDivider: true },
  { href: "/authentication", title: "Logout", icon: LogOut },
];

export default function DashboardDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useProfile();
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative block">
      <button className="p-1 rounded" onClick={toggleDropdown}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[250px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <ul className="flex flex-col gap-1 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
            <div>
              <span className="ml-2 block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
              {profile?.name ? profile.name : 'Loading...'}
              </span>
              <span className="ml-2 mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
              {profile?.email ? profile.email : 'Loading...'} 
              </span>
            </div>
            <Membership premiumMembership={profile?.sole_trader === true} />
            </div>

          {dashboardMenuItems.map((item, index) =>
            item.isDivider ? (
              <li
                key={`divider-${index}`}
                className="my-2 border-t border-gray-200 dark:border-gray-700"
              />
            ) : (
              <li key={item.href}>
                <DropdownItem
                  onItemClick={closeDropdown}
                  tag="a"
                  to={item.href}
                  className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  {item.icon && (
                    <item.icon className="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
                  )}
                  {item.title}
                </DropdownItem>
              </li>
            )
          )}
        </ul>
      </Dropdown>
    </div>
  );
}
