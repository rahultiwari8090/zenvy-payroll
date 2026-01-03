import db from "../config/db.js";

export const getSalaryByUser = (userId, cb) => {
  db.query(
    "SELECT * FROM salary_slips WHERE user_id = ?",
    [userId],
    cb
  );
};
