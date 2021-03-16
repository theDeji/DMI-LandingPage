import styled from 'styled-components'

export const NavContainer = styled.div`
  padding: 5px;
  background-color:#b33636;
//   opacity: .5;
`;

export const NavContent = styled.div`
    margin: 3px 50px;
    height: 50px;
    color: white;
    display: flex;
    flex-direction:row;
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

`


export const Logo = styled.div`


`

export const NavLinks = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;

    h4{
        margin:20px;
    }
`