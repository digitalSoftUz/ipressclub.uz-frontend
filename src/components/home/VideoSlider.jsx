import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./Modal/Modal";
import { AccardionDiv, Container, Img, PlayWrapper, Text, VideoDiv } from "./style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { baseUrl } from '../../contants';
import axios from 'axios';

const VideoSlider = (props) => {
  var t = props.t;
  var til = props.til;
  var Regions = props.Regions;
  
  const [category, setCategory] = useState(1);
  const [open, setOpen] = useState(false);
  const [video_url, setvideo_url] = useState("");
  const [title, settitle] = useState('');
  let style1 = {
    color: "white",
    fontWeight: 500,
    fontSize: 20,
  };
  const OpenModal = (item) => {
    setvideo_url(item.link);
    settitle(
      til === "uz" ? item.name
      : til === "ru" ? item.name_ru
      : til === "oz" ? item.name_uz
      : item.name_en
    )
    setOpen(true);
  };

  const [trips, setTrips] = useState([])
  const [filtertrips, setFiltertrips] = useState([])

  function CategoryChoose(item) {
    setCategory(item.id);
    const newFilter = filtertrips.filter((value) => {
      return value.region === item.id
    });
    setTrips(newFilter);
  }
  useEffect(()=>{
    axios.get(`${baseUrl}/api/trips/`)
    .then((res)=>{
      setTrips(res.data)
      setFiltertrips(res.data)
    })
  },[])

  return (
    <React.Fragment>
      <div className="videoslider__container">
        <div className="container">
          <div className="video_slider">
            <h1 className="slider__title">{t("SAFARLAR")}</h1>
            <Modal video_url={video_url} open={open} setOpen={setOpen} title={title} />
            <AccardionDiv>
              <Accordion style={{backgroundColor:'#262A33',}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{color:'white'}} />} 
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{color:'white',fontFamily:'monospace !important'}}
                >
                  <div>Viloyatlar</div>
                </AccordionSummary>
                <AccordionDetails style={{marginTop:0}}>
                  {Regions?.map((item, index) => (
                  <Text
                    style={item === category ? style1 : { color: "#676970" }}
                    key={index}
                    onClick={() => CategoryChoose(item)}
                  >
                    {
                      til === "uz" ? item.name
                      : til === "ru" ? item.name_ru
                      : til === "oz" ? item.name_uz
                      : item.name_en
                    }
                  </Text>
                ))}
                </AccordionDetails>
              </Accordion>

            </AccardionDiv>
            <div className="viloyatlar">
              <Container>
                {Regions?.map((item, index) => (
                  <Text
                    style={item.id === category ? style1 : { color: "#676970" }}
                    key={index}
                    onClick={() => CategoryChoose(item)}
                  >
                    {
                      til === "uz" ? item.name
                      : til === "ru" ? item.name_ru
                      : til === "oz" ? item.name_uz
                      : item.name_en
                    }
                  </Text>
                ))}
              </Container>
            </div>
            <Swiper
              // slidesPerView={5}
              spaceBetween={15}
              navigation={true}
              breakpoints={{
                10: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                425: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1920: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation]}
              className="VideoSwiper"
            >
              {trips?.map((item, index) => (
                <SwiperSlide key={index}>
                  <VideoDiv bg={baseUrl+item.img}>
                    <PlayWrapper onClick={() => OpenModal(item)}>
                      <Img />
                    </PlayWrapper>
                  </VideoDiv>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoSlider;
