import styled from 'styled-components';
import help from '../../assets/help.jpg'

export const ContentBox = styled.div`
    width: 200px;
    height: 200px;
    background: #ff944d;
    margin: 50px 20px;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;  
    transition: all .5s ease;  

    &:hover{
        cursor:pointer;
        transform: translateY(-10px);
    }

    img{
        width: 100%;
        margin-bottom:15px;
    }
`;

// export const _ = styled.div`
    
// `
// export const _ = styled.div`
    
// `