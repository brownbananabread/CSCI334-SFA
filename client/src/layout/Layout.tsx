import { Outlet } from "react-router";

/* Statuc layout that returns genric layout for authentication pages. */

const AppLayout: React.FC = () => (
  <div style={{ overflow: "hidden", height: "100vh" }}>
    <Outlet />
  </div>
);

export default AppLayout;
