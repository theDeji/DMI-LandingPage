import styled from 'styled-components'

export const PartnerContent = styled.div`
  background: white;
  box-shadow: 1px 1px 10px black;
  padding-top:30px;

  h2{
    text-align:center;
    color:black;
    opacity:80%;
    margin-bottom:30px;
  }

`;


export const PartnerContainer = styled.div`
  display: flex;
  flex-direction:column;
  padding: 0 50px;

  div{
    display:flex;
    flex-direction: rows;
    justify-content: center;
    align-items:center;
    margin-bottom: 30px;
  }


  @media screen and (max-width: 1120px) {
    div{
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 540px) {
    div{
      display: flex;
      flex-wrap: wrap;
    }
  }

`;

export const Ic = styled.div`
  transition: all .5s ease;

  &:hover{
    transform: translateY(-10px);
  }

`


export const IconItem = styled.div`
  margin: 25px 30px;
  
  img:hover{
      cursor:pointer;
  }
`
