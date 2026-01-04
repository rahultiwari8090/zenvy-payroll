import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import HRDashboard from "./pages/HRDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import RunPayroll from "./pages/RunPayroll";
import SalarySlip from "./pages/SalarySlip";

const ProtectedRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;
  if (roleRequired && role !== roleRequired) return <Navigate to="/login" replace />;

  return children;
};

function App() {
  return (
    <Router>
      {/* 🔥 NAVBAR ALWAYS VISIBLE */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route
          path="/hr-dashboard"
          element={
            <ProtectedRoute roleRequired="HR">
              <HRDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute roleRequired="Employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/run-payroll"
          element={
            <ProtectedRoute roleRequired="HR">
              <RunPayroll />
            </ProtectedRoute>
          }
        />

        <Route
          path="/salary-slip"
          element={
            <ProtectedRoute roleRequired="Employee">
              <SalarySlip />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
