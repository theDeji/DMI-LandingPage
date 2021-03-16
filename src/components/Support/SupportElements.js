import styled from 'styled-components';
import help from '../../assets/help.jpg'

export const SupportContent = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${help});
    background-position: center;
    background-size: cover;
    height: 100%;

    @media screen and (max-width: 540px) {
        background-position: center;
        background-size: cover;
        height: 100%;
    }
`;

export const SupportContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 30px 30px;
    h2{
        text-align:center;
        color:white;
    }
`
export const Option = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 1120px) {
        display: flex;
        flex-direction:column;
        // margin: 30px 30px;
        // height: 100%;
      }
    
      @media screen and (max-width: 540px) {
        display: flex;
        flex-direction:column;
        // margin: 30px 30px;
        height: 100%;
      }
`

export const PartnerBtn = styled.div`
    width: 300px;
    height:80px;
    background:#ff4d4d;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding: 10px;
    border-radius:10px;
    transition: all .5s ease;

    &:hover{
        cursor: pointer;
        transform: translateX(10px);
    }

    h4{
        color:white;
        margin-left: 5px;
        margin-top:2px;
        font-size: 20px;
    }

`