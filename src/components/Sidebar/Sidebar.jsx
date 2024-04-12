import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="Sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu-icon-hamburger"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="new-chat-icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="recent-message-icon" />
              <p>What is react</p>
              <p>What is Next</p>
              <p>History of humans</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="ff" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
