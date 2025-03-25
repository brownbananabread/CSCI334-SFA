import { Outlet } from "react-router";

const AppLayout: React.FC = () => (
  <div style={{ overflow: "hidden", height: "100vh" }}>
    <Outlet />
  </div>
);

export default AppLayout;
