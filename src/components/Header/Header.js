import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Container maxWidth="lg">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img className="logo" src="/logo.png" alt="logo" />
          </Link>
          <nav>
            <Link className="nav-link" to={"/"}>
              Asosiy sahifa
            </Link>
            <Link className="nav-link" to={"/solutions"}>
              Yechimlar
            </Link>
            <Link className="nav-link" to={"/about"}>
              Biz haqimizda
            </Link>
            <Link className="nav-link" to={"/connection"}>
              Aloqa
            </Link>
          </nav>
          <Button btnText={"sinab ko'rish"} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
