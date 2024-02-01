import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={()=>navigate("/")}>
            <ArrowBack/>
          </IconButton>
        </div>

        <div className="mail__toolsRight"></div>
      </div>
    </div>
  );
};

export default Mail;
