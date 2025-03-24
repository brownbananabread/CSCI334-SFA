import { Navigate, Outlet } from "react-router";
import Header from "../components/nav/Header";
import { ProfileProvider } from "../context/ProfileContext";

const DashboardLayout: React.FC = () => {
  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];

  if (accessToken !== "123") {
    return <Navigate to="/authentication" replace />;
  }

  return (
    <ProfileProvider>
      <div className="min-h-screen xl:flex">
        <div className={`flex-1 transition-all duration-300 ease-in-out`}>
          <Header isDashboard={true} />
          <div className="px-10 mx-auto w-7/8 md:p-6 mt-6">
            <Outlet />
          </div>
        </div>
      </div>
    </ProfileProvider>
  );
};

export default DashboardLayout;
