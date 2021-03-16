import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 5px;
  background-color: #b33636;
`;

export const NavContent = styled.div`
  margin: 3px 70px;
  height: 50px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
  }

  h4:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
  }

  @media screen and (max-width: 540px) {
    margin: 3px 20px;
  }
`;

export const Logo = styled.div``;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 20px;
  }
`;
