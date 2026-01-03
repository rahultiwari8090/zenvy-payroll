import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="logo" onClick={() => navigate("/")}>ZENVY</span>

        <button onClick={() => navigate("/")}>Home</button>

        {role === "HR" && (
          <>
            <button onClick={() => navigate("/hr-dashboard")}>HR Dashboard</button>
            <button onClick={() => navigate("/run-payroll")}>Run Payroll</button>
          </>
        )}

        {role === "Employee" && (
          <>
            <button onClick={() => navigate("/employee-dashboard")}>
              Employee Dashboard
            </button>
            <button onClick={() => navigate("/salary-slip")}>Salary Slip</button>
          </>
        )}
      </div>

      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
