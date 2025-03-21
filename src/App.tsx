import { BrowserRouter, Routes, Route, Navigate } from "react-router"; // Correct import from react-router-dom
import Authentication from "./pages/Authentication";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./layout/DashboardLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Dashboard from "./pages/Dashboard/Home"; 
import { AlertProvider } from "./context/AlertContext";
import Layout from "./layout/Layout";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";

export default function App() {
  return (
    <>
      <AlertProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route index path="" element={<Navigate to="/authentication" />} />

            {/* Dashboard Layout */}
            <Route element={<DashboardLayout />}>
              <Route index path="/dashboard" element={<Dashboard />} />
              <Route index path="/dashboard/profile" element={<Profile />} />
              <Route index path="/dashboard/settings" element={<Settings />} />
            </Route>

            {/* Landing Layout */}
            <Route element={<Layout />}>
              <Route index path="/authentication" element={<Authentication />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </>
  );
}