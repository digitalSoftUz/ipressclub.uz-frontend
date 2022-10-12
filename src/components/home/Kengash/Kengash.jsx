import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  CategoryButton,
  CategoryContainer,
  CategoryContainer1,
  Container, Img,
  Image, PlayWrapper,
  Lavozim, MainWrapper,
  Name, PeopleContainer,
} from "./style";
import Modal from "../Modal/Modal";
import { Tooltip } from "@mui/material";
import { baseUrl } from "../../../contants";
import { styled } from '@mui/material/styles';
import { Cat_Data } from "../../../data/kengash";
import  { tooltipClasses } from '@mui/material/Tooltip';
import St_img from "../../../assets/icons/favicon.ico"

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const Kengash = (props) => {
  const til = props.til
  const [category, setcategory] = useState(Cat_Data[0].name);
  const [teamData, setTeamData] = useState([]);
  const [jamoaData, setJamoaData] = useState([]);
  const [photosData, setPhotosData] = useState([]);
  const [videosData, setVideoData] = useState([]);
  
  const [open, setOpen] = useState(false);
  const [video_url, setvideo_url] = useState("");
  const [title, settitle] = useState('');

  const OpenModal = (item) => {
    setvideo_url(item.video_or_url === 1 ? baseUrl+item.video : item.video_url);
    settitle("")
    setOpen(true);
  };
  useEffect(() => {
    async function GetTeams() {
      try {
        const res = await axios.get(`${baseUrl}/api/team/`)
        if(res){
          setTeamData(res.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
    async function GetJamoa() {
      try {
        const res = await axios.get(`${baseUrl}/api/jamoa/`)
        if(res){
          setJamoaData(res.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
    async function GetPhotos() {
      try {
        const res = await axios.get(`${baseUrl}/api/photos/`)
        if(res){
          setPhotosData(res.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
    async function GetVideos() {
      try {
        const res = await axios.get(`${baseUrl}/api/videos/`)
        if(res){
          setVideoData(res.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
    GetTeams()
    GetJamoa()
    GetPhotos()
    GetVideos()
  }, [])
  

  const Categoried = () => {
    switch (category) {
      case "Жамоа":
        return jamoaData?.map((item, index) => (
          <Box key={index}>
            <Image src={`${baseUrl + item.img}`} />
            {
              til === "uz" ? <Name>{item.fullname}</Name>
              : til === "ru" ? <Name>{item.fullname_ru}</Name> 
              : til === "oz" ? <Name>{item.fullname_uz}</Name> 
              : <Name>{item.fullname_en}</Name>
            }
            {
              til === "uz" ? <Lavozim>{item.position}</Lavozim>
              : til === "ru" ? <Lavozim>{item.position_ru}</Lavozim> 
              : til === "oz" ? <Lavozim>{item.position_uz}</Lavozim> 
              : <Lavozim>{item.position_en}</Lavozim>
            }
          </Box>
        ));
      case "Кенгаш":
        return teamData?.map((item, index) => (
          <Box key={index}>
            <Image src={`${baseUrl + item.img}`} />
            {}
            {
              til === "uz" ? <Name>{item.fullname}</Name>
              : til === "ru" ? <Name>{item.fullname_ru}</Name> 
              : til === "oz" ? <Name>{item.fullname_uz}</Name> 
              : <Name>{item.fullname_en}</Name>
            }
            {
              til === "uz" ? <Lavozim>{item.position}</Lavozim>
              : til === "ru" ? <Lavozim>{item.position_ru}</Lavozim> 
              : til === "oz" ? <Lavozim>{item.position_uz}</Lavozim> 
              : <Lavozim>{item.position_en}</Lavozim>
            }
          </Box>
        ));
      case "Тарих":
        return teamData?.map((item, index) => (
          <Box key={index}>
            
          </Box>
        ));
      case "Фотоотчёт":
        return photosData?.map((item, index) => (
          <Box key={index}>
            <Image src={`${baseUrl + item.photo}`} />
            {/* <Name>{item.fullname}</Name>
            <Lavozim>{item.position}</Lavozim> */}
          </Box>
        ));
      case "Видеоотчёт":
        return videosData?.map((item, index) => (
          <Box key={index} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            {/* <ReactPlayer
              className="react-player fixed-bottom"
              url={item.video_or_url === 1 ? baseUrl+item.video : item.video_url}
              width="100%"
              style={{objectFit:'cover',backgroundSize:'cover',borderRadius:20}}
              height="100%"
              controls={false}
              
              // playing={show}    
              // onEnded={()=>setshow(false)}
            /> */}
            <Image src={`${baseUrl }${item.img === undefined ? St_img : item.img}`} alt="Xatolik"  style={{cursor:"pointer"}}/>
            <PlayWrapper onClick={() => OpenModal(item)}>
              <Img />
            </PlayWrapper>
            {/* <Name>{item.fullname}</Name>
            <Lavozim>{item.position}</Lavozim> */}
          </Box>
        ));
      default:
        break;
    }
  };

  return (
    <Container>
      <MainWrapper>
        <CategoryContainer>
          {Cat_Data.map((item, index) => (
            <CategoryButton
              key={index}
              onClick={() => setcategory(item.name)}
              boolen={item.name === category ? true : false}
            >
              
              {item.name}
            </CategoryButton>
          ))}
        </CategoryContainer>
        <CategoryContainer1>
          {Cat_Data.map((item, index) => (
            <BootstrapTooltip  key={index} title={item.name} placement="top">
            <CategoryButton
              onClick={() => setcategory(item.name)}
              boolen={item.name === category ? true : false}
            >
             
                
                {item.view}
            </CategoryButton>
            </BootstrapTooltip>
          ))}
        </CategoryContainer1>
        <PeopleContainer>
          {Categoried()}
          <Modal video_url={video_url} open={open} setOpen={setOpen} title={title} />  
        </PeopleContainer>
      </MainWrapper>
    </Container>
  );
};

export default Kengash;
