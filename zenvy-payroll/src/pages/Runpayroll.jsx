const RunPayroll = () => {
  return (
    <div className="page run-payroll">
      <h2>Run Payroll</h2>
      <p className="subtitle">
        Generate monthly payroll for all employees
      </p>

      <div className="payroll-card">
        <h3>Payroll Calculation</h3>

        <div className="payroll-row">
          <span>Basic Salary</span>
          <span>₹40,000</span>
        </div>

        <div className="payroll-row">
          <span>Allowances</span>
          <span>₹8,000</span>
        </div>

        <div className="payroll-row">
          <span>Deductions</span>
          <span>₹3,000</span>
        </div>

        <div className="payroll-total">
          Net Salary: ₹45,000
        </div>

        <button className="btn payroll-btn">
          Generate Payroll
        </button>
      </div>
    </div>
  );
};

export default RunPayroll;
