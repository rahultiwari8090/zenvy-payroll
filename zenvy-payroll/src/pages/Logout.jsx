import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    // clear auth state
    logout();

    // redirect to home after short delay
    const timer = setTimeout(() => {
      navigate("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <div className="page logout-page">
      <h2>You have been logged out</h2>
      <p>Redirecting to home page...</p>
    </div>
  );
};

export default Logout;
