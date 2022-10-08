import React, { Component } from 'react';
import { baseUrl } from '../../contants';

import youtube from "../../assets/icons/share_youtube.svg";
import telegram from "../../assets/icons/share_telegram.svg";
import facebook from "../../assets/icons/share_facebook.svg";
import instagram from "../../assets/icons/share_instagram.svg";

class WeekNews extends Component {
  state = {  } 
  render() { 
    var t = this.props.t
    var til = this.props.til
    var info = this.props.data
    var week = this.props.week
    var nweek = this.props.nweek
    return (
      <React.Fragment>
        <div className="container">
          <div className="weeknews">
            <h1 className='title__h1'>
              <a href='news'>{t("XAFTAYANGILIKLARI")}</a>
            </h1>
            <div className="weeknews__content">
              <div className='weeknews__list'>
                {nweek.map((d, index) =>{
                  return(
                    <a href={`news/${d.id}`} key={index} data-aos="zoom-in">
                      {
                      til === "uz" ? d.name
                      : til === "ru" ? d.name_ru
                      : til === "oz" ? d.name_uz
                      : d.name_en
                      }
                    </a>
                  )
                })}
              </div>
              <div className='weeknews__items'>
                {week.map((w, i) =>{
                  return(
                    <div className="w__item" key={i} data-aos="fade-right">
                      <div className='news__image'><img src={baseUrl + w.img1} alt="" /></div>
                      <div className='news__infos'>
                        <a className='news__info' href={`news/${w.id}`}>
                          <h5>
                            {
                            til === "uz" ? w.name
                            : til === "ru" ? w.name_ru
                            : til === "oz" ? w.name_uz
                            : w.name_en
                            }
                          </h5>
                          <p>
                            {
                            til === "uz" ? w.mini_text
                            : til === "ru" ? w.mini_text_ru
                            : til === "oz" ? w.mini_text_uz
                            : w.mini_text_en
                            }
                          </p>
                        </a>
                        <span>{w.date}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="social__buttons">
              <a data-aos="zoom-out" className='telegram' rel="noreferrer" target="_blank" href={`${info.telegram_link}`}><img src={telegram} alt="" /><p>Telegram</p> </a>
              <a data-aos="zoom-out" className='instagram' rel="noreferrer" target="_blank" href={`${info.instagram_link}`}><img src={instagram} alt="" /><p>Instagram</p></a>
              <a data-aos="zoom-out" className='youtube' rel="noreferrer" target="_blank" href={`${info.youtube_link}`}><img src={youtube} alt="" /><p>Youtube</p></a>
              <a data-aos="zoom-out" className='facebook' rel="noreferrer" target="_blank" href={`${info.fb_link}`}><img src={facebook} alt="" /><p>Facebook</p></a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default WeekNews;