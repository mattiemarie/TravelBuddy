import React from "react";
import "../header/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@material-ui/core";
// import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <a href="/">
        <img className="header__icon" src="../logo.png" alt="logo"/>
      </a>
    </div>
  );
}

export default Header;
