import { LabelImportantOutlined, StarBorderOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ id, title, subject, message, time }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({
      id,
      title,
      subject,
      message,
      time
    }));
    navigate("/mail")
  }

  return <div className="emailRow" onClick={openMail}>

    <div className="emailRow__options">
      <input type='checkbox' className='checkbox' />
      <IconButton>
        <StarBorderOutlined />
      </IconButton>
      <IconButton>
        <LabelImportantOutlined />
      </IconButton>
    </div>

    <h3 className="emailRow__title">
      {title}
    </h3>

    <div className="emailRow__message">
      <h4>{subject} {" "}
        <span className="emailRow__description">-{message}</span>
      </h4>

    </div>

    <div className="emailRow__time">
      {time}
    </div>

  </div>;
};

export default EmailRow;
