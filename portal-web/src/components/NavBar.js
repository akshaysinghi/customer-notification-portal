import React, { useCallback } from "react";
import {useNavigate} from "react-router-dom"
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { removeUserName } from "../utils/util-service";
import notification from "../notification_white.svg";
import './NavBar.css';

const NavBar = props => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => {navigate('/', {replace: true});removeUserName();}, [navigate]);
    
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">
        DOCOMO PORTAL
        <div>
          {" "}
          <NavbarText>Hi, @{props.username}</NavbarText>
        </div>
      </NavbarBrand>
      <Nav className="justify-content-end" navbar>
      <NavItem>
        </NavItem>
        <NavItem onClick={() => props.handleShowNotification()} className="position-relative cursor-pointer">
          <div>
          <img src={notification} className="notification-logo" alt="notification" />
              <Badge className={"position-absolute position-badge"} pill color="danger">{props.nonReadNotification}</Badge>
          </div>
        </NavItem>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            Switch Account
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleOnClick()} >Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
