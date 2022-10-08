import React, { Component } from 'react';
import { baseUrl } from '../../contants';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Earth from "../../assets/icons/earth.svg";
import Location from "../../assets/icons/location.svg";


class News extends Component {
  state = { 
    dropdown1: false,
    dropdown2: false,
   } 
   handledown1 = () =>{
    this.setState({
      dropdown1: !this.state.dropdown1
    })
   }
   handledown2 = () =>{
    this.setState({
      dropdown2: !this.state.dropdown2
    })
   }
  render() { 
    var t = this.props.t
    var til = this.props.til
    var news = this.props.news4
    var Fnews = this.props.Fnews
    var Lnews = this.props.Lnews
    return (
      <React.Fragment>
        <div className="container">
          <div className="news__container">
            <div className={
                this.state.dropdown1 
                ? "xabarlar mahalliy dropdown1 animate__animated animate__backInLeft" 
                : "xabarlar mahalliy animate__animated animate__backInLeft"
              }>
              <div onClick={this.handledown1} className="news__title">
                <img src={Earth} alt="" />
                <p>
                  {t("MAHALLIYXABARLAR")}
                  < KeyboardArrowDownIcon />  
                </p>
              </div>
              {Lnews.map((n) =>{
                return(
                  <div className="news" key={n.id} data-aos="flip-up">
                    <a href={`news/${n.id}`}>
                      {
                      til === "uz" ? n.name
                      : til === "ru" ? n.name_ru
                      : til === "oz" ? n.name_uz
                      : n.name_en
                      }
                    </a>
                    <p> {n.date} </p>
                  </div>
                )
              })}
            </div>
            <div className="news__center animate__animated animate__fadeInUp">
            {news.map((n) =>{
                return(
                  <a 
                    href={`news/${n.id}`} 
                    to={`news/${n.id}`} 
                    key={n.id} 
                    data-aos="fade-up"
                  >
                    <div>
                      <img src={baseUrl + n.img1} alt="" />
                    </div>
                    <div>
                      <h5>
                      {
                      til === "uz" ? n.name
                      : til === "ru" ? n.name_ru
                      : til === "oz" ? n.name_uz
                      : n.name_en
                      }
                      </h5>
                      <p>
                      {
                      til === "uz" ? n.mini_text
                      : til === "ru" ? n.mini_text_ru
                      : til === "oz" ? n.mini_text_uz
                      : n.mini_text_en
                      }  
                      </p>
                      <span>{n.date}</span>
                    </div>
                    
                  </a>
                )
              })}
            </div>
            <div className={
                this.state.dropdown2 
                ? "xabarlar xorijiy dropdown2 animate__animated animate__backInRight" 
                : "xabarlar xorijiy animate__animated animate__backInRight"}>
              <div onClick={this.handledown2} className="news__title">
                <img src={Location} alt="" />
                <p>
                  {t("XORIJIYXABARLAR")}
                  < KeyboardArrowDownIcon />  
                </p>
              </div>
              {Fnews.map((n) =>{
                return(
                  <div className="news" key={n.id} data-aos="flip-up">
                    <a href={`news/${n.id}`}>
                      {
                      til === "uz" ? n.name
                      : til === "ru" ? n.name_ru
                      : til === "oz" ? n.name_uz
                      : n.name_en
                      }
                    </a>
                    <p> {n.date} </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default News;