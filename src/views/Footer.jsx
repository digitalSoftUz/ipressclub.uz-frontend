import React, { Component } from 'react';
import { PC } from '../context/context';

// import search from '../assets/icons/search.svg';
import youtube from '../assets/icons/share_youtube.svg';
import telegram from '../assets/icons/share_telegram.svg';
import facebook from '../assets/icons/share_facebook.svg';
import instagram from '../assets/icons/share_instagram.svg';

class Footer extends Component {
    state = {  } 
    render() { 
        var t = this.props.t
        var til = this.props.til 
        return (
            <PC.Consumer>
                {(x)=>(
                    <div className="footer">
                        <div className="footer-container">
                            <p className='footer-info'>
                                {
                                til === "uz" ? x.data.info
                                : til === "ru" ? x.data.info_ru
                                : til === "oz" ? x.data.info_uz
                                : x.data.info_en
                                }    
                            </p>
                            <ul className="footer-list">
                                {/* <li>
                                    <a href='/'>{t("FOOTER.NEWS")}</a>
                                </li>
                                <li>
                                    <a href='/'>{t("FOOTER.TOPNEWS")}</a>
                                </li>
                                <li>
                                    <a href='/'>{t("FOOTER.SPORT")}</a>
                                </li>
                                <li>
                                    <a href='/'>{t("FOOTER.TECH")}</a>
                                </li> */}
                                <li>
                                    <a href='/projects'>{t("FOOTER.PROJECTS")}</a>
                                </li>
                                <li>
                                    <a href='/xpk'>{t("FOOTER.ABOUT")}</a>
                                </li>
                                <li>
                                    <a href='#aloqa'>{t("FOOTER.CONTACT")}</a>
                                </li>
                            </ul>
                            <div className="footer-icon">
                                <div className="footer-lan">
                                    <button onClick={x.handleEn} className={x.til === "en" ? "lang_active" : ""}>En</button>
                                    <button onClick={x.handleOz} className={x.til === "oz" ? "lang_active" : ""}>O'z</button>
                                    <button onClick={x.handleUz} className={x.til === "uz" ? "lang_active" : ""}>Уз</button>
                                    <button onClick={x.handleRu} className={x.til === "ru" ? "lang_active" : ""}>Ру</button>
                                </div>
                                <div className="footer-icon-group">
                                    <div>
                                        <a href={`${x.data.instagram_link}`} rel="noreferrer" target="_blank"><img src={instagram} alt="" /></a>
                                        <a href={`${x.data.telegram_link}`} rel="noreferrer" target="_blank"><img src={telegram} alt="" /></a>
                                    </div>
                                    <div>
                                        <a href={`${x.data.fb_link}`} rel="noreferrer" target="_blank"><img src={facebook} alt="" /></a>
                                        <a href={`${x.data.youtube_link}`} rel="noreferrer" target="_blank"><img src={youtube} alt="" /></a>
                                    </div>
                                </div>
                                {/* <div className="footer-input">
                                    <input type="text" />
                                    <img src={search} alt="" />
                                </div> */}
                            </div>
                        </div>
                        <span>Copyright by Digital City 2022</span>
                    </div>
                )}
            </PC.Consumer>
        );
    }
}
 
export default Footer;