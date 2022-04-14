import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Sidebar = () => {
  return (
    <SidebarStyle>
      <Nav />
    </SidebarStyle>
  );
};

export default Sidebar;

const SidebarStyle = styled.div`
  background-color: var(--sidebar-dark-color);
  width: 16.3rem;
  height: 100vh;
  position: fixed;
  left: 0;
`;
