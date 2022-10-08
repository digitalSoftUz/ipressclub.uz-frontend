import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../../contants';
import { Swiper, SwiperSlide } from "swiper/react";
import {Lazy, Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

class Header extends Component {
  state = { 
    data:[]
   } 
  componentDidMount() {
    axios.get(`${baseUrl}/api/news/three/`)
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
        <div className="header animate__animated animate__backInUp">
          <Swiper
            spaceBetween={10}
            effect={"fade"}
            loop={true}
            // autoplay={{
            //   delay: 3500,
            //   disableOnInteraction: false,
            // }}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Lazy, Autoplay, Navigation, Pagination]}
            className="headerSwiper"
          >
            {this.state.data.map((a, i) =>{
              return(
                <SwiperSlide key={i}>
                  <div 
                    className="header__items" 
                    style={{
                      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseUrl + a.img1})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                    >
                    <p className='header__title'>
                      {
                      til === "uz" ? a.name
                      : til === "ru" ? a.name_ru
                      : til === "oz" ? a.name_uz
                      : a.name_en 
                      }
                    </p>
                    <p className='header__info'>
                      {
                      til === "uz" ? a.mini_text
                      : til === "ru" ? a.mini_text_ru
                      : til === "oz" ? a.mini_text_uz
                      : a.mini_text_en
                      }
                    </p>
                    <p className='header__date'>{a.date}</p>
                    <a className='header__btn' href={`news/${a.id}`}>{t("BATAFSIL")}</a>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Header;