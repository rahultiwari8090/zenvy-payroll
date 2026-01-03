import Layout from "../components/Layout";

function PayrollForm() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Generate Payroll</h2>

      <div className="bg-white p-6 rounded shadow w-96">
        <input className="w-full border p-2 mb-3" placeholder="Employee ID" />
        <input className="w-full border p-2 mb-3" placeholder="Days Present" />
        <input className="w-full border p-2 mb-3" placeholder="Month" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Generate
        </button>
      </div>
    </Layout>
  );
}

export default PayrollForm;
