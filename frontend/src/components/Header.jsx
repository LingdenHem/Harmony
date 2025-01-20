import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 50px 40px 50px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #ccc;
  h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Navbar = styled.nav`
  display: flex;
  margin-left: 100px;
  gap: 40px;
`;

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reservation");
  };
  return (
    <HeaderContainer>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/dine">Dine</Link>
        <Link to="/bar">Bar</Link>
      </Navbar>
      <h1> Harmony </h1>
      <button onClick={handleClick}>Reservation</button>
    </HeaderContainer>
  );
}
