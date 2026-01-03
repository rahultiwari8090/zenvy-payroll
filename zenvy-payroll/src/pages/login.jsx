import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // ✅ SAFE SESSION RESET
      localStorage.removeItem("token");
      localStorage.removeItem("role");

      // ✅ SAVE SESSION
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // ✅ HARD REDIRECT (GUARANTEED)
      if (data.role === "Employee") {
        window.location.href = "/employee-dashboard";
      } else {
        window.location.href = "/hr-dashboard";
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="title">Login</h1>
        <p className="subtitle">Enter credentials to continue</p>

        <div className="login-form">
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
