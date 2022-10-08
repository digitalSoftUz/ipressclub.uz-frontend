import styled from 'styled-components';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
`
export const Img = styled(PlayArrowRoundedIcon)`
    color: white !important;
    font-size: 50px !important;
    transition: .4s !important;

`

export const PlayWrapper = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 100%;
    border: 0.5px solid white;
    background: rgba(255,255,255,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
    position: absolute;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    &:hover ${Img} {
        transform: scale(1.1);
    }

`

export const MainWrapper = styled.div`
    width: 98%;
    max-width: 1700px;
`

export const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin: 20px;
    box-sizing: border-box;
    @media (max-width:650px){
        overflow-y: auto;
        display: none;
    }
`
export const CategoryContainer1 = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin: 20px;
    box-sizing: border-box;
    @media (max-width:650px){
        display: flex;
    }
`


export const CategoryButton = styled.p`
    width: calc(100% / 5);
    height: 40px;
    display:block;
    padding:5px 0;
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: ${p=>p.boolen ? 500 : 400};
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
    position:relative;
    background-color: #FFF1E5;
    transition: all 0.3s ease-in-out;
    &:before{
      display:block;
      content:'';
      width:100%;
      height:5px;
      bottom:5px;
      left:0;
      bottom:-3px;
      text-align: center;
      background: ${p=>p.boolen ? ' rgba(38, 73, 212, 1)' : 'white'};
      position:absolute;
      transition: all 0.3s ease-in-out;
    }
    &:hover{
        cursor: pointer;
        &:before{
        width:100%;
      }
    }
    color: ${p=>p.boolen ? ' rgba(51, 51, 51, 1)' : 'rgba(159, 159, 159, 1)'};
    @media (max-width:650px){
        width: 120px; 
        padding: 0px 10px;
    }
`

export const PeopleContainer = styled.div`
    width: auto;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width:1701px){
        justify-content: space-around;
    }
    @media (max-width:1291px){
        justify-content: space-around;
    }
`
export const Lavozim = styled.div`
    font-family: 'Montserrat';
    font-size: 11px;
    font-weight: 300;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 10px;

`
export const Box = styled.div`
    width: 235px;
    height: 295px;
    margin: 24px;
    position: relative;
    @media (max-width:585px){
        width: 95%;
        height: auto;
    }
    transition: .3s;
    &:hover ${Lavozim}{
        /* display: none; */
    }
    &:hover{
        transform: scale(1.02);
    }
    
`
export const Image = styled.img`
    height: 228.03758239746094px;
    width: 100%;
    object-fit: cover;
    @media (max-width:585px){
        height: auto;
        object-fit: contain;
    }
    
`
export const Name = styled.div`
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(51, 51, 51, 1);
    margin-top: 13px;
    width: 90%;
    margin: auto;
    padding-top: 12px;
    &:hover{
        text-decoration: underline;
        color: blue;
        cursor: pointer     ;
    }
`
