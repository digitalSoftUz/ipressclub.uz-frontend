import React, { Component } from 'react';
import { PC } from '../context/context';

// import images
import Call from "../assets/icons/call.svg"
import Mail from "../assets/icons/mail.svg"
import Instagram from "../assets/icons/instagram.svg"
import Facebook from "../assets/icons/facebook.svg"
import Telegram from "../assets/icons/telegram.svg"
import Youtube from "../assets/icons/youtube.svg"

class NavUp extends Component {
  state = {  } 
  render() { 
    return (
      <PC.Consumer>
        {(x)=>{
          return(
            <React.Fragment>
              <div className="up__navbar">
              <div className="container">
                <div className="nav__up">
                  <div className="contacts animate__animated animate__fadeInLeftBig">
                    <a href={`mailto: ${x.data.email}`}>
                      <img src={Mail} alt="" />
                      {x.data.email}
                    </a>
                    <a href={`tel: ${x.data.phone}`}>
                      <img src={Call} alt="" /> 
                      {x.data.phone}
                    </a>
                  </div>
                  <div className="languages animate__animated animate__fadeInRightBig">
                    <div className='lang'>
                      <button onClick={x.handleEn} className={x.til === "en" ? "lang_active" : ""}>En</button>
                      <button onClick={x.handleOz} className={x.til === "oz" ? "lang_active" : ""}>O'z</button>
                      <button onClick={x.handleUz} className={x.til === "uz" ? "lang_active" : ""}>Уз</button>
                      <button onClick={x.handleRu} className={x.til === "ru" ? "lang_active" : ""}>Ру</button>
                    </div>
                    <div className="share">
                      <a href={`${x.data.instagram_link}`} rel="noreferrer" target="_blank"><img src={Instagram} alt="" /></a>
                      <a href={`${x.data.telegram_link}`} rel="noreferrer" target="_blank"><img src={Telegram} alt="" /></a>
                      <a href={`${x.data.fb_link}`} rel="noreferrer" target="_blank"><img src={Facebook} alt="" /></a>
                      <a href={`${x.data.youtube_link}`} rel="noreferrer" target="_blank"><img src={Youtube} alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </React.Fragment>
          )
        }}
      </PC.Consumer>
    );
  }
}
 
export default NavUp;