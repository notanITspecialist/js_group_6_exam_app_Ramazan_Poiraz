import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {NavLink as ToLink} from "react-router-dom";
import {logoutUser} from "../../actions/user";

const UserBar = () => {
    const userName = useSelector(state => state.authorization.user.username);

    const dispatch = useDispatch();

    return (
        <>
            <NavItem>
                <NavLink tag={ToLink} to='/addProduct' >Add product</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Hello, {userName}!
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        View profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => dispatch(logoutUser())} >
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </>
    );
};

export default UserBar;