import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="App">
        <div className="header">
          <div className="logo_box">
            <div className="logo"></div>
          </div>

          <div className="menu_box">
            <div className="menu">공지사항</div>
            <div className="menu">대학생활가이드</div>
            <div className="menu">동아리</div>
            <div className="menu">학교안내</div>
          </div>
        </div>
        <div className="MG"></div>
        <div className="jpg"> </div>
      </div>
    </div>
  );
};

export default Header;
