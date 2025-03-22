import { Outlet } from "react-router";
import Header from "../components/nav/Header";

const AppLayout: React.FC = () => (
  <div className="min-h-screen xl:flex">
      <div
        className={`flex-1 transition-all duration-300 ease-in-out`}
      >
        <Header isDashboard={true}/>
        <div className="px-10 mx-auto w-7/8 md:p-6 mt-6">
          <Outlet />
        </div>
      </div>
      {/* Render global toast notifications */}
    </div>
);

export default AppLayout;
