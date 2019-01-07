import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
                <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/">
                    <img src={Logo} alt='logo' className="navbar-brand" />
                    </Link>
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-5">
                                <Link to="/" className="nav-link">
                                    product
                                </Link>
                            </li>
                        </ul>
                        <Link to="/cart" className="ml-auto">
                            <ButtonContainer>
                                <span className="mr-2">
                                    <i className="fas fa-cart-plus" />
                                </span>
                                My cart
                            </ButtonContainer>
                        </Link>
                    </Nav>
        )
    }
}

const Nav = styled.nav`
    background-color: var(--MainGreen);
    .nav-link {
        color: var(--MainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitlize;
    }
`