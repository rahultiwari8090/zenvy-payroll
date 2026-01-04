import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import payrollRoutes from "./routes/payroll.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/payroll", payrollRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on ${PORT}`)
);

