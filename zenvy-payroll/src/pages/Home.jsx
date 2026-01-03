import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = (role) => {
    localStorage.setItem("loginRole", role);
    navigate("/login");
  };

  return (
    <div className="home">
      <div className="home-card">
        <h1 className="home-title">ZENVY Payroll System</h1>
        <p className="home-subtitle">
          Centralized payroll management platform
        </p>

        <div className="home-actions">
  <button className="btn home-btn" onClick={() => goToLogin("HR")}>
    Login as HR
  </button>

  <button className="btn home-btn" onClick={() => goToLogin("Employee")}>
    Login as Employee
  </button>
</div>

      </div>
    </div>
  );
};

export default Home;
