import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Authentication from "./pages/Authentication";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Home"; 
import { AlertProvider } from "./context/AlertContext";
import Layout from "./layout/Layout";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";
import Activity from "./pages/Dashboard/Activity";

export default function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          {/* Redirect root path */}
          <Route path="/" element={<Navigate to="/authentication" />} />

          <Route element={ <DashboardLayout /> }>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/activity" element={<Activity />} />
          </Route>

          <Route element={<Layout />}>
            <Route path="/authentication" element={<Authentication />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}
