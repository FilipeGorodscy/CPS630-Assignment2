import React from "react";

const HeaderDropdown = ({ title, children }) => {
  return (
    <li className="nav-item dropdown">
      <div className="nav-link dropdown-toggle" data-toggle="dropdown">
        {title}
      </div>
      <div className="dropdown-menu">{children}</div>
    </li>
  );
};

export default HeaderDropdown;
