import express from "express";
import db from "../config/db.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/* ================= RUN PAYROLL (already working) ================= */
router.post("/generate", protect, (req, res) => {
  const { employee_id, days_present, month, year } = req.body;

  db.query(
    "SELECT salary FROM employees WHERE id = ?",
    [employee_id],
    (err, result) => {
      if (err || result.length === 0) {
        return res.status(500).json({ message: "Employee not found" });
      }

      const basic = result[0].salary;
      const net = (basic / 30) * days_present;

      db.query(
        "INSERT INTO payroll (employee_id, basic_salary, days_present, net_salary, month, year) VALUES (?, ?, ?, ?, ?, ?)",
        [employee_id, basic, days_present, net, month, year],
        () => res.json({ message: "Payroll Generated" })
      );
    }
  );
});

/* ================= HR PAYROLL HISTORY ================= */
router.get("/all", protect, (req, res) => {
  db.query(
    `SELECT p.month, p.year, p.days_present, p.net_salary
     FROM payroll p`,
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "DB error" });
      }
      res.json(result);
    }
  );
});

export default router;
/* ================= EMPLOYEE SALARY SLIP ================= */
router.get("/my", protect, (req, res) => {
  const employeeId = req.user.id;

  db.query(
    `SELECT month, year, days_present, net_salary
     FROM payroll
     WHERE employee_id = ?`,
    [employeeId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "DB error" });
      }
      res.json(result);
    }
  );
});
