import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../contants';
import { useParams } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Earth from "../../../assets/icons/earth.svg";
import Location from "../../../assets/icons/location.svg";

const SinglePage = (props) => {
  var t = props.t;
  var til = props.til;
  var Fnews = props.Fnews;
  var Lnews = props.Lnews;
  let params = useParams();
  const [news, setNews] = useState([]);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const handledown1 = () =>{
    setDropdown1(!dropdown1)
  };
  const handledown2 = () =>{
    setDropdown2(!dropdown2)
  };

  useEffect(()=>{
    async function getNews() {
      try {
        const res = await axios.get(`${baseUrl}/api/news/${params.id}/`)
        if(res){
          setNews(res.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
    getNews();
  }, [])
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
                    <a href={`${n.id}`}>
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
            <div className="news__center">
              {/*  */}
              <div className="tanlangan__yangilik animate__animated animate__backInUp first__line">
                <img src={baseUrl + news.img1} alt="" />
                <div className='watchers'>
                  <span>{news.date}</span>
                  <span><VisibilityIcon/>{news.watcher}</span>
                </div>
                <h1>
                  {
                    til === "uz" ? news.name
                    : til === "ru" ? news.name_ru
                    : til === "oz" ? news.name_uz
                    : news.name_en
                  }
                </h1>
                <p>
                  {
                    til === "uz" ? news.mini_text
                    : til === "ru" ? news.mini_text_ru
                    : til === "oz" ? news.mini_text_uz
                    : news.mini_text_en
                  }
                </p>
                <p>
                  {
                    til === "uz" ? news.text
                    : til === "ru" ? news.text_ru
                    : til === "oz" ? news.text_uz
                    : news.text_en
                  }
                </p>
                
              </div>
              {/*  */}
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
                    <a href={`${n.id}`}>
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
          </div>
      </div>
      
    </React.Fragment>
   );
}
 
export default SinglePage;