import React, { Children } from "react";

const HeaderDropdown = ({ title, children }) => {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
        {title}
      </a>
      <div className="dropdown-menu">{children}</div>
    </li>
  );
};

export default HeaderDropdown;
