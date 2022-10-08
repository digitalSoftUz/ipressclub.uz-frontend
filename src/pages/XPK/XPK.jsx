import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from "../../contants"
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';

class Xpk extends Component {
  state = { 
    data:[{
      id: null,
      name:"",
      name_ru:"",
      name_en:"",
      text:"",
      text_ru:"",
      text_en:"",
      img:"",
      text1:"",
      text1_ru:"",
      text1_en:"",
    }]
   } 
   componentDidMount() {
    axios.get(`${baseUrl}/api/about/xpk/`)
      .then((res) => {
        const data = res.data;
        this.setState({ data: data });
      }
    )
   }
  render() { 
    var t = this.props.t 
    var til = this.props.til 
    var a = this.state.data
    return (
      <React.Fragment>
        <div className="container">
          <div className="xpk">
            <div className="xpk__title">
              <h1 className='animate__animated animate__backInLeft'>
                {
                  til === "uz" ? a.name
                  : til === "ru" ? a.name_ru
                  : til === "oz" ? a.name_uz
                  : a.name_en
                }
              </h1>
              <div>
                <Button variant="outlined" className='animate__animated animate__backInRight' >
                  <ShareIcon/>
                  <span>{t("SHARE")}</span>
                </Button>
              </div>
            </div>
            <div className="xpk__text">
              <p className='animate__animated animate__fadeInUp'>
                {
                  til === "uz" ? a.text
                  : til === "ru" ? a.text_ru
                  : til === "oz" ? a.text_uz
                  : a.text_en
                }
              </p>
              <img src={`${baseUrl + a.img}`} alt="" className='animate__animated animate__zoomIn' />
              <p data-aos="fade-up">
                {
                  til === "uz" ? a.text1
                  : til === "ru" ? a.text1_ru
                  : til === "oz" ? a.text1_oz
                  : a.text1_en
                }
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Xpk;