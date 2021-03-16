import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

// export const Nav = styled.nav`
//   height: 80px;
//   font-weight: 700;
// `;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left:70px;
  text-decoration: none !important;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 0;
  }
`;

export const NavIcon = styled.div`
  cursor: pointer;
  color: #fff;
`;

export const Bars = styled(FaBars)`
  font-size: 2rem;
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
  }
`;
