 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import ManageCompanies from "./pages/ManageCompanies";
import ManageCommunications from "./pages/ManageCommunications";
import Dashboard from "./pages/Dashboard";
import AnalyticsPage from "./pages/AnalyticsDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/companies" element={<ManageCompanies />} />
        <Route path="/communication" element={<ManageCommunications />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
