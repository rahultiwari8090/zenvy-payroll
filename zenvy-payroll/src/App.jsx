import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import RunPayroll from "./pages/RunPayroll";
import SalarySlip from "./pages/SalarySlip";
import Logout from "./pages/Logout";

import Home from "./pages/Home";
import Login from "./pages/login";
import HRDashboard from "./pages/HRDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

const ProtectedRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;

  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      {/* ✅ Navbar only when logged in */}
      {token && <Navbar />}

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* HR DASHBOARD */}
        <Route
          path="/hr-dashboard"
          element={
            <ProtectedRoute roleRequired="HR">
              <HRDashboard />
            </ProtectedRoute>
          }
        />

        {/* EMPLOYEE DASHBOARD */}
        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute roleRequired="Employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        {/* RUN PAYROLL (HR only – still accessible via navbar) */}
        <Route
          path="/run-payroll"
          element={
            <ProtectedRoute roleRequired="HR">
              <RunPayroll />
            </ProtectedRoute>
          }
        />

        {/* SALARY SLIP (Employee only) */}
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
