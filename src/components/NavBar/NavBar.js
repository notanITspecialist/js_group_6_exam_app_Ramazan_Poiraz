import React from 'react';
import { Navbar, NavItem, NavLink, Nav} from 'reactstrap';
import {NavLink as ToLink} from 'react-router-dom';
import Container from "reactstrap/lib/Container";
import UserBar from "./UserBar";
import AnonimusBar from "./AnonimusBar";
import {useSelector} from "react-redux";

const NavBar = () => {
    const user = useSelector(state => state.authorization.user);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <Nav>
                        <NavItem>
                            <NavLink tag={ToLink} to='/' >Products</NavLink>
                        </NavItem>
                        {user.token ? (
                            <UserBar/>
                        ) : (
                            <AnonimusBar/>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;