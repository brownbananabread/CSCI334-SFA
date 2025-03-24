import { Outlet } from "react-router";
import Header from "../components/nav/Header";

const AppLayout: React.FC = () => (
  <div style={{ overflow: "hidden", height: "100vh" }}>
    <Header/>
    <Outlet />
  </div>
);

export default AppLayout;
