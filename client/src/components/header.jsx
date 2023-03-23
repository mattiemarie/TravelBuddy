import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src="./possiblelogo2.png;" />
      </Link>
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
