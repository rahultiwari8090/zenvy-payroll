import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">Zenvy Payroll</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/hr-dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/payroll" className="hover:text-blue-400">
            Generate Payroll
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-red-400">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
