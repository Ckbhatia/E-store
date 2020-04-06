import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Logo from "../logo.svg";
import logos from "../logos.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { TiSupport } from "react-icons/ti";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div className="site-main logo-container">
          <Link to="/" title="Home" className="nav-link">
            {/* <img src={logos} alt="logo" className="logo-img"></img> */}
            <span className="nav-main-text">City Bazzar</span>
          </Link>
        </div>
        <div className="nav-btn-container">
          <Link
            to="support"
            title="Support"
            className="support-icon mr-3 ml-auto"
          >
            <TiSupport />
          </Link>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              My cart
            </ButtonContainer>
          </Link>
        </div>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background-color: var(--MainGreen);
  display: flex;
  justify-content: space-between;

  // .logo-container {
  //   width: 6%;
  // }
  // .logo-img {
  //   width: 100%;
  // }
  .nav-main-text {
    font-family: "Chewy", cursive;
    letter-spacing: 1.5px;
  }
  .nav-link {
    color: var(--MainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitlize;
  }

  .support-icon > svg {
    font-size: 2rem;
    color: #f9f9f9;
  }
`;
