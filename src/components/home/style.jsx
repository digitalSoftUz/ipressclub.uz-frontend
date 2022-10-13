import styled from 'styled-components';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { Box } from '@mui/material';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:1280px){
        display: none;
    }
`
export const Text = styled.div`
    font-family: 'Montserrat';
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #676970;
    transition: .1s;
    &:hover{
        font-weight: 500;
        color: white !important;  
        cursor: pointer; 
    }
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
    &:hover {
        transform: scale(1.1);
    }
    &:hover ${Img} {
        transform: scale(1.1);
    }

`
export const VideoDiv = styled.div`
    background-image: url(${props=>props.bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 204px;
    cursor: pointer;    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
    &:hover{
        transform: scale(1.04);
    }
`
export const AccardionDiv = styled.div`
    display: none;
    @media (max-width:1280px){
        display: block;
    }
    margin-bottom: 40px;
`

export const ModalWrapperMain = styled(Box)`
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 850px !important;
    border: '2px solid #000' !important;
    box-shadow: 24px !important;
    padding: 20px !important;
    height:600px !important;
    outline:none !important;
    background-color: #000000 !important;
    border:none !important;
    @media (max-width:900px){
        width: 100% !important;
        height: 100% !important;
        padding: 10px !important;
    }
`