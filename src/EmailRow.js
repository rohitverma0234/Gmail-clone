import { LabelImportantOutlined, StarBorderOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css"
import { useNavigate } from 'react-router-dom';

const EmailRow = ({id, title, subject, description,time}) => {
  const navigate = useNavigate();
  return <div className="emailRow" onClick={()=>navigate('/mail')}>

  <div className="emailRow__options">
  <input type='checkbox' className='checkbox'/>
  <IconButton>
  <StarBorderOutlined/>
  </IconButton>
  <IconButton>
  <LabelImportantOutlined/>
  </IconButton>
  </div>

  <h3 className="emailRow__title">
  {title}
  </h3>

  <div className="emailRow__message">
  <h4>{subject} {" "}
  <span className="emailRow__description">-{description}</span>
  </h4>

  </div>

  <div className="emailRow__time">
  {time}
  </div>

  </div>;
};

export default EmailRow;
