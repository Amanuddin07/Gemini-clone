import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, newChat, clearHistory } =
    useContext(Context);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="menu"
          className="menu"
          onClick={() => setExtended(prev => !prev)}
        />

        <div className="new-chat" onClick={newChat}>
          <img src={assets.plus_icon} alt="plus" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>

            {prevPrompts.map((item, index) => (
              <div
                key={index}
                className="recent-entry"
                onClick={() => onSent(item)}
              >
                <img src={assets.message_icon} alt="msg" />
                <p>
                  {item.length > 25
                    ? item.slice(0, 25) + "..."
                    : item}
                </p>
              </div>
            ))}

            {prevPrompts.length > 0 && (
              <button
                className="clear-history"
                onClick={clearHistory}
              >
                Clear History
              </button>
            )}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="activity" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
