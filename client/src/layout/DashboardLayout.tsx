import { Navigate, Outlet } from "react-router";
import RegularHeader from "../components/nav/RegularHeader";
import { useProfile, ProfileProvider } from "../context/ProfileContext";
import Sidebar from "../components/nav/Sidebar";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import DashboardMobileHeader from "../components/nav/DashboardMobileHeader";

const DashboardLayoutContent: React.FC = () => {
  const { profile } = useProfile();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];

  if (accessToken !== "123") {
    return <Navigate to="/authentication" replace />;
  }

  return profile?.sole_trader ? (
    <div className="min-h-screen xl:flex">
      <Sidebar />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <DashboardMobileHeader />
        <div className="px-10 mx-auto w-7/8 mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen xl:flex">
      <div className="flex-1 transition-all duration-300 ease-in-out">
        <RegularHeader />
        <div className="px-10 mx-auto w-7/8 mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const DashboardLayout: React.FC = () => {
  return (
    <ProfileProvider>
      <SidebarProvider>
        <DashboardLayoutContent />
      </SidebarProvider>
    </ProfileProvider>
  );
};

export default DashboardLayout;
