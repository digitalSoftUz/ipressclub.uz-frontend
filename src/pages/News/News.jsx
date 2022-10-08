import React, { useState } from 'react';
import { baseUrl } from '../../contants';
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Earth from "../../assets/icons/earth.svg";
import Location from "../../assets/icons/location.svg";

const SinglePage = (props) => {
  var t = props.t;
  var til = props.til;
  var Fnews = props.Fnews;
  var Lnews = props.Lnews;
  var singlenews = props.singlenews;
  var News = singlenews.slice(0, 1);
  var News4 = singlenews.slice(1, 5);
  var News6 = singlenews.slice(5, 11);
  var News10L = singlenews.slice(11, 21);
  var News10R = singlenews.slice(21, 31);
  // const [news, setNews] = useState([]);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const handledown1 = () =>{
    setDropdown1(!dropdown1)
  };
  const handledown2 = () =>{
    setDropdown2(!dropdown2)
  };
  // useEffect(()=>{
  //   async function getNews() {
  //     try {
  //       const res = await axios.get(`${baseUrl}/api/news/${params.id}/`)
  //       if(res){
  //         setNews(res.data)
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getNews();
  // }, [])
  return ( 
    <React.Fragment>
      <div className="container">
        <div className="news__single">
            <div className={
                dropdown1 
                ? "xabarlar mahalliy dropdown1 animate__animated animate__backInLeft" 
                : "xabarlar mahalliy animate__animated animate__backInLeft"
              }>
              <div onClick={handledown1} className="news__title">
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
              {/*  */}
            </div>
            <div className="mahalliy__left">
              {News10L.map((w, i) =>{
                return(
                  <div className="w__item" key={i} data-aos="fade-up">
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
            <div className="news__center animate__animated animate__fadeInUp">
              {/*  */}
              <h1 className='title__h1'>{t("HOME.NAV3")}</h1>
              {News.map((w, i) =>{
                  return(
                    <a href={`news/${w.id}`} key={i} className="tanlangan__yangilik" data-aos="fade-up">
                      <img src={baseUrl + w.img1} alt="" />
                      <h2>
                        {
                          til === "uz" ? w.name
                          : til === "ru" ? w.name_ru
                          : til === "oz" ? w.name_uz
                          : w.name_en
                        }
                      </h2>
                      <h3>
                        {
                          til === "uz" ? w.mini_text
                          : til === "ru" ? w.mini_text_ru
                          : til === "oz" ? w.mini_text_uz
                          : w.mini_text_en
                        }
                      </h3>
                      <div className="watchers">
                        <span>{w.date}</span>
                        <span><VisibilityIcon/>{w.watcher}</span>
                      </div>
                    </a>
                  )
                })}
              {/*  */}
              <div className='weeknews__items'>
                {News4.map((w, i) =>{
                  return(
                    <a href={`news/${w.id}`} key={i} className="tanlangan__yangilik" data-aos="fade-up">
                      <img src={baseUrl + w.img1} alt="" />
                      <h2>
                        {
                          til === "uz" ? w.name
                          : til === "ru" ? w.name_ru
                          : til === "oz" ? w.name_uz
                          : w.name_en
                        }
                      </h2>
                      <h3>
                        {
                          til === "uz" ? w.mini_text
                          : til === "ru" ? w.mini_text_ru
                          : til === "oz" ? w.mini_text_uz
                          : w.mini_text_en
                        }
                      </h3>
                      <div className="watchers">
                        <span>{w.date}</span>
                        <span><VisibilityIcon/>{w.watcher}</span>
                      </div>
                    </a>
                  )
                })}
                
              </div>
              {/*  */}
                <div className="news__center__last">
                  {News6.map((w, i) =>{
                    return(
                      <a href={`news/${w.id}`} key={i} className="tanlangan__yangilik" data-aos="fade-up">
                        <img src={baseUrl + w.img1} alt="" />
                        <h2>
                          {
                            til === "uz" ? w.name
                            : til === "ru" ? w.name_ru
                            : til === "oz" ? w.name_uz
                            : w.name_en
                          }
                        </h2>
                        <h3>
                          {
                            til === "uz" ? w.mini_text
                            : til === "ru" ? w.mini_text_ru
                            : til === "oz" ? w.mini_text_uz
                            : w.mini_text_en
                          }
                        </h3>
                        <span>{w.date}</span>
                      </a>
                    )
                  })}
                </div>
            </div>
            <div className={
                dropdown2 
                ? "xabarlar xorijiy dropdown2 animate__animated animate__backInRight" 
                : "xabarlar xorijiy animate__animated animate__backInRight"}>
              <div onClick={handledown2} className="news__title">
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
            {/*  */}
            <div className="xorijiy__right">
              {News10R.map((w, i) =>{
                return(
                  <div className="w__item" key={i} data-aos="fade-up">
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
      </div>
      
    </React.Fragment>
   );
}
 
export default SinglePage;