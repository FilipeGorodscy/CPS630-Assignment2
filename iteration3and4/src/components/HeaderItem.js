import React from "react";
import { Link } from "react-router-dom";

const HeaderItem = ({ path, children }) => {
  return (
    <li className="nav-item ">
      <Link to={path} className="nav-link">
        {children}
      </Link>
    </li>
  );
};

export default HeaderItem;
