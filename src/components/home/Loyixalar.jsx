import React, { Component } from 'react';
import axios from 'axios';
import { Navigation } from "swiper";
import { baseUrl } from '../../contants';
import { Swiper, SwiperSlide } from "swiper/react";

class Loyixalar extends Component {
  state = { 
    data:[{id:1}]
  } 
  componentDidMount() {
    axios.get(`${baseUrl}/api/projects/`)
    .then((res) => {
      const data = res.data;
      this.setState({ data: data });
    })
  }
  render() { 
    var t = this.props.t
    var til = this.props.til 
    return (
      <React.Fragment>
        <div className="container">
        <div className="loyixalar">
          <h1 className='title__h1'>
            <a href="projects">{t("HOME.NAV2")}</a>
          </h1>
          <Swiper
            data-aos="fade-up"
            slidesPerView={5}
            spaceBetween={30}
            // loop={true}
            loopFillGroupWithBlank={true}
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
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            className="loyihaSwiper"
          > {this.state.data.map((z, i) =>{
              return(
                <SwiperSlide 
                  key={z.id} 
                >
                  <div className='loyiha__item'>
                    <img src={baseUrl + z.img1} alt="" />
                    <a href={`projects/${z.id}`}>
                      <h5>
                        {
                        til === "uz" ? z.name
                        : til === "ru" ? z.name_ru
                        : til === "oz" ? z.name_uz
                        : z.name_en
                        }  
                      </h5>
                      <p>
                      {
                      til === "uz" ? z.mini_text
                      : til === "ru" ? z.mini_text_ru
                      : til === "oz" ? z.mini_text_uz
                      : z.mini_text_en
                      }
                      </p>
                    </a>
                    
                    <span>{z.date}</span>
                  </div>
                </SwiperSlide>
              )
            }) }
          </Swiper>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Loyixalar;