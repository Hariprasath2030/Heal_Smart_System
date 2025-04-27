// Navigation.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaHome, FaHeartbeat, FaBrain, FaUserMd } from "react-icons/fa"; // Added icons

const NavigationStyled = styled.nav`
  width: ${(props) => (props.isOpen ? "220px" : "70px")};
  transition: width 0.4s ease;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  border-right: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  min-height: 100vh;
  position: sticky;
  top: 0;
  z-index: 100;

  .menu-icon {
    font-size: 2rem;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: transform 0.3s ease;
  }

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    margin-top: 1rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: ${(props) => (props.isOpen ? "1rem" : "0")};
    padding: 1rem;
    cursor: pointer;
    font-size: 1.1rem;
    white-space: nowrap;
    transition: background 0.3s, padding-left 0.3s;
    padding-left: ${(props) => (props.isOpen ? "1.5rem" : "1rem")};

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }

    svg {
      font-size: 1.3rem;
    }

    span {
      display: ${(props) => (props.isOpen ? "inline" : "none")};
    }
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? "160px" : "60px")};
  }
`;

function Navigation({ active, setActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationStyled isOpen={isOpen}>
      <FaBars className="menu-icon" onClick={toggleMenu} />
      <ul>
        <li onClick={() => setActive(1)}>
          <FaHome /> <span>Home</span>
        </li>
        <li onClick={() => setActive(2)}>
          <FaHeartbeat /> <span>Symptom Analysis</span>
        </li>
        <li onClick={() => setActive(3)}>
          <FaBrain /> <span>Mental Wellness</span>
        </li>
        <li onClick={() => setActive(4)}>
          <FaUserMd /> <span>Consult Doctor</span>
        </li>
      </ul>
    </NavigationStyled>
  );
}

export default Navigation;
