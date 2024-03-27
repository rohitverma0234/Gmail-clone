import {ArrowBack,CheckCircle, Delete,Email,Error,ExitToApp,LabelImportant,MoreVert,MoveToInbox,
Print,UnfoldMore,WatchLater,} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css"

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <CheckCircle />
          </IconButton>

          <IconButton>
            <LabelImportant />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">

      <div className="mail__bodyHeader">
      <h2>Subject</h2>
      <LabelImportant className="mail__important"/>
      <p>Title</p>
      <p className="mail__time">11AM</p>
      </div>

      <div className="mail__message">
      <p>This is a message</p>
      </div>

      </div>
    </div>
  );
};

export default Mail;
