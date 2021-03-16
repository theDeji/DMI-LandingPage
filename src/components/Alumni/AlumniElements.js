import styled from 'styled-components';
import alumni from '../../assets/alumni.jpg'



export const AlumniContent = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${alumni});
  background-position: center;
  background-size: cover;
  height: 430px;
  padding-top:30px;

  h2{
    text-align:center;
    color:white;
    margin-bottom:30px;
  }

  @media screen and (max-width: 1120px) {
    display: flex;
    flex-direction:column;
    margin-top: 30px;
    height: 100%;
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction:column;
    height: 100%;
    // width:100%;
  }
`

export const AlumniContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:0 50px;

  @media screen and (max-width: 1120px) {
    height:100%;
    display: flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;
