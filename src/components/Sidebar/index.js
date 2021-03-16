import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/">Alumni</SidebarLink>
        <SidebarLink to="/">Partners</SidebarLink>
        <SidebarLink to="/">Support</SidebarLink>
      </SidebarMenu>
    </SidebarContainer> 
  );
};

export default Sidebar;
