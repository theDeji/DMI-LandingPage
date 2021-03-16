import React from 'react';
import { NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <NavIcon onClick={toggle}>
          <Bars  />
      </NavIcon>
    </>
  );
};

export default Navbar;
