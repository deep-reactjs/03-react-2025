import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router";

const ChildPageNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <button onClick={() => navigate("/")}>
        <BsArrowLeft className="size-6" />
      </button>
    </div>
  );
};

export default ChildPageNavbar;
