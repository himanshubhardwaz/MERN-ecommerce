import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../actions/userActions"

const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state => state.userLogin));
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >ePay</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart" >
                                <Nav.Link ><ShoppingCartIcon />CART</Nav.Link>
                            </LinkContainer>
                            {
                                userInfo ? (
                                    <NavDropdown title={userInfo.name} id="username">
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) :
                                    <LinkContainer to="/login">
                                        <Nav.Link ><PermIdentityOutlinedIcon />SIGN IN</Nav.Link>
                                    </LinkContainer>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    )
}

export default Header;
