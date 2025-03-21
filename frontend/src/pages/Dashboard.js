import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="container">
            <div className="auth-container dashboard">
                <h2 className="dashboard-title">Welcome to Your Dashboard!</h2>
                <p>You have successfully logged in to your account.</p>
                <button onClick={handleLogout} className="btn" style={{ marginTop: "20px" }}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
