import { useEffect, useState } from "react";

const HRDashboard = () => {
  const [days, setDays] = useState("");
  const [payrolls, setPayrolls] = useState([]);

  const runPayroll = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/payroll/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          employee_id: 1,
          days_present: days,
          month: "January",
          year: 2026
        })
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Error");

      alert("Payroll generated successfully ✅");
      setDays("");
      fetchPayrolls();
    } catch {
      alert("Server error");
    }
  };

  const fetchPayrolls = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/payroll/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      const data = await res.json();
      if (res.ok) setPayrolls(data);
    } catch {
      console.log("Error fetching payrolls");
    }
  };

  useEffect(() => {
    fetchPayrolls();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="page run-payroll">
        <h2>HR Dashboard</h2>
        <p className="subtitle">Manage payroll operations</p>

        <div className="payroll-card">
          <h3>Run Payroll</h3>

          <input
            className="login-input"
            type="number"
            placeholder="Days Present (e.g. 22)"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />

          <button className="btn payroll-btn" onClick={runPayroll}>
            Generate Payroll
          </button>
        </div>

        <div className="payroll-card">
          <h3>Payroll History</h3>

          {payrolls.length === 0 ? (
            <p>No payroll records found</p>
          ) : (
            <table className="payroll-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Year</th>
                  <th>Days Present</th>
                  <th>Net Salary</th>
                </tr>
              </thead>
              <tbody>
                {payrolls.map((p, index) => (
                  <tr key={index}>
                    <td>{p.month}</td>
                    <td>{p.year}</td>
                    <td>{p.days_present}</td>
                    <td>₹ {p.net_salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
