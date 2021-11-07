import React from "react";
import "./topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
        <span className="logo">admin portal</span>
        </div>
        <div className="topbar-right">
            <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
            </div>
            <div className="topbar-icon-container">
            <Language />
            <span className="top-icon-badge">2</span>
            </div>
            <div className="topbar-icon-container">
            <Settings />
            </div>
            <img src="" alt="" className="top-avatar"/>
        </div>
      </div>
    </div>
  );
}
