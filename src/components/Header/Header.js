/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Icons from './Icons';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="titlebar">
      <Navbar color="faded" light>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="white">☰</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Main page</DropdownItem>
            <DropdownItem>Tools</DropdownItem>
            <DropdownItem>About</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
        <NavbarBrand href="/" className="mx-auto">
          JHove 2020
        </NavbarBrand>
        <Icons />
      </Navbar>
    </div>
  );
};

export default Header;
