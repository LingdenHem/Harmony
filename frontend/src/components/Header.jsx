import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px 40px;
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

  .hamburger-menu {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .hamburger-menu {
      display: inline-block;
      z-index: 999;
      cursor: pointer;
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 20px;
    gap: 40px;
    transition: left 0.3s ease-in-out;
    z-index: 998;
  }
`;

const Backdrop = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 997;
  }
`;

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reservation");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <CgCloseR className="mobile-nav-icon" />
        ) : (
          <CgMenu className="mobile-nav-icon" />
        )}
      </div>
      <Navbar isMenuOpen={isMenuOpen}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/dine" onClick={closeMenu}>
          Dine
        </Link>
        <Link to="/bar" onClick={closeMenu}>
          Bar
        </Link>
      </Navbar>
      <Backdrop isMenuOpen={isMenuOpen} onClick={closeMenu} />
      <h1>Harmony</h1>
      <button onClick={handleClick}>Reservation</button>
    </HeaderContainer>
  );
}
