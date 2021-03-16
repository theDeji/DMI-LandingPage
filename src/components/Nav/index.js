import React, { useState } from "react";

import { NavContainer, Logo, NavLinks, NavContent } from "./NavElements";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo>
          <h2>school.me</h2>
        </Logo>
        <NavLinks>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
