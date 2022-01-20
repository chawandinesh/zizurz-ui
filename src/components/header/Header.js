import React from "react";
import "./header.css";
function Header() {
  const buttons = ["home", "about", "hair styles", "news", "contacts"];
  return (
    <div className="container">
      <div className="header_wrap">
        <div className="header__wrap__left">
          <h1>ZIZURZ</h1>
        </div>
        <div className="header__wrap__right">
          <ul>
            {buttons.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
