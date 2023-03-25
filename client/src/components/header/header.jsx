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
        <img className="header__icon" src="../possiblelogo2.png" alt="logo"/>
      </a>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <ShoppingCartIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
