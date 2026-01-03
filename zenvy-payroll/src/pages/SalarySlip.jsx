const SalarySlip = () => {
  return (
    <div className="page">
      <h2>Salary Slip – April 2026</h2>

      <div className="salary-slip">
        <div className="salary-row"><span>Basic</span><span>₹40,000</span></div>
        <div className="salary-row"><span>HRA</span><span>₹8,000</span></div>
        <div className="salary-row"><span>Deductions</span><span>₹3,000</span></div>
        <div className="salary-total">Net Pay: ₹45,000</div>
      </div>
    </div>
  );
};

export default SalarySlip;
