import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../Theme";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Navbar = styled.nav`
  display: flex;
  gap: 40px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/dine">Dine</Link>
        <Link to="/bar">Bar</Link>
      </Navbar>
      <h1> Harmony </h1>
      <button>Reservation</button>
    </HeaderContainer>
  );
}
