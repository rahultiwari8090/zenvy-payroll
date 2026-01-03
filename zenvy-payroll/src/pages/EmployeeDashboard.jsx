import { useEffect, useState } from "react";

const EmployeeDashboard = () => {
  const [salarySlip, setSalarySlip] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH EMPLOYEE SALARY SLIP
  const fetchSalarySlip = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/employee/salary-slip",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );

      const data = await res.json();
      if (res.ok) {
        setSalarySlip(data);
      }
    } catch (err) {
      console.log("Error fetching salary slip");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalarySlip();
  }, []);

  if (loading) return <p className="page">Loading...</p>;

  return (
    <div className="dashboard-container">
      <div className="page">
        <h2>Employee Dashboard</h2>
        <p className="subtitle">View your salary details</p>

        {!salarySlip ? (
          <p>No salary records found</p>
        ) : (
          <div className="salary-slip">
            <h3>Salary Slip</h3>

            <div className="salary-row">
              <span>Month</span>
              <span>{salarySlip.month}</span>
            </div>

            <div className="salary-row">
              <span>Year</span>
              <span>{salarySlip.year}</span>
            </div>

            <div className="salary-row">
              <span>Days Present</span>
              <span>{salarySlip.days_present}</span>
            </div>

            <div className="salary-row">
              <span>Basic Salary</span>
              <span>₹ {salarySlip.basic_salary}</span>
            </div>

            <div className="salary-total">
              Net Salary: ₹ {salarySlip.net_salary}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
