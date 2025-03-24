import { Navigate, Outlet } from "react-router";
import DashboardHeader from "../components/nav/DashboardHeader";
import { ProfileProvider, useProfile } from "../context/ProfileContext";

const DashboardLayoutContent: React.FC = () => {
  const { profile } = useProfile();

  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];

  if (accessToken !== "123") {
    return <Navigate to="/authentication" replace />;
  }

  return (
    <ProfileProvider>
      {profile?.sole_trader ? (
        <div className="min-h-screen xl:flex">
          <div className={`flex-1 transition-all duration-300 ease-in-out`}>
        <DashboardHeader isSoleTrader={true}/>
        <div className="px-10 mx-auto w-7/8 md:p-6 mt-6">
          <Outlet />
        </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen xl:flex">
          <div className={`flex-1 transition-all duration-300 ease-in-out`}>
        <DashboardHeader isSoleTrader={false}/>
        <div className="px-10 mx-auto w-7/8 md:p-6 mt-6">
          <Outlet />
        </div>
          </div>
        </div>
      )}
    </ProfileProvider>
  );
};

const DashboardLayout: React.FC = () => {
  return (
    <ProfileProvider>
      <DashboardLayoutContent />
    </ProfileProvider>
  );
};

export default DashboardLayout;
