import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user"); 

    console.log("Logged out successfully");
    navigate("/login"); 
  }, [navigate]);

  return (
    <div>
      <p>You are being logged out...</p>
    </div>
  );
};

export default Logout;