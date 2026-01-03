import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const goToLogin = (role) => {
    localStorage.setItem("loginRole", role);
    navigate("/login");
  };

  return (
    <div className="login-container">
      <h1 className="title">ZENVY Payroll System</h1>
      <p className="subtitle">Choose your role to continue</p>

      <div className="login-actions">
        <button className="btn" onClick={() => goToLogin("HR")}>
          Login as HR
        </button>

        <button className="btn secondary" onClick={() => goToLogin("Employee")}>
          Login as Employee
        </button>
      </div>
    </div>
  );
};

export default Landing;   
