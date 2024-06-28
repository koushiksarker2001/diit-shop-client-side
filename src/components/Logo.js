import React from "react";
import logo from "../assest/logo/logo.png";
import { useNavigate } from "react-router-dom";
const Logo = ({ w, h }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")}>
      <img src={logo} alt="" width="300px" />
    </div>
  );
};

export default Logo;
