import React, { useState } from 'react';
import axios from 'axios';

const AttendanceEntry = ({ empId }) => {
    const [days, setDays] = useState(0);

    const submitAttendance = async () => {
        await axios.post('http://localhost:5000/api/attendance/add', {
            userId: empId,
            presentDays: days,
            month: "2024-03"
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } // JWT Security [cite: 33, 61]
        });
        alert("Attendance Updated");
    };

    return (
        <div>
            <input type="number" placeholder="Days Present" onChange={(e) => setDays(e.target.value)} />
            <button onClick={submitAttendance}>Submit</button>
        </div>
    );
};