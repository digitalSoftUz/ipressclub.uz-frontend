import styled from "styled-components";
// import styled, { keyframes } from "styled-components";

// const breatheAnimation = keyframes`
//     0% { height: 100px; width: 100px; }
//     30% { height: 400px; width: 400px; opacity: 1 }
//     40% { height: 405px; width: 405px; opacity: 0.3; }
//     100% { height: 100px; width: 100px; opacity: 0.6; }
// `;
export const Container = styled.div`
    width: calc(100% - 4px);
    height: 150px;
    border: 2px solid #f9f8f8;
    margin-bottom: 100px;
    margin-top: 20px;
    @media (max-width:1000px){
        height: 80px;
    }
    max-width: 2000px;
    margin: auto;
`;
export const LogoDiv =styled.div`
    @media (max-width:1500px){
        width: 200px;
    }
    @media (max-width:1250px){
        width: 150px;
    }
    @media (max-width:900px){
        width: 120px;
    }
`
export const BrandWheel =styled.div`
    
`
export const BrandSlide =styled.div`
    
`
export const Img = styled.img`
    transition: 0.3s;
    width: 200px;
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    @media (max-width:1500px){
        width: 180px;
    }
    @media (max-width:1250px){
        width: 130px;
    }
    @media (max-width:900px){
        width: 100px;
    }
`