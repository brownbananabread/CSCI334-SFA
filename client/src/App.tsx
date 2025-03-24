import { BrowserRouter, Routes, Route, Navigate } from "react-router";
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
    <AlertProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Redirect root path */}
          <Route path="/" element={<Navigate to="/authentication" />} />

          {/* Dashboard Layout with ProfileProvider */}
          <Route element={ <DashboardLayout /> }>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>

          {/* Landing / Auth Layout */}
          <Route element={<Layout />}>
            <Route path="/authentication" element={<Authentication />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}
