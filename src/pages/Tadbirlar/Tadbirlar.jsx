import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from "../../contants";
import Button from '@mui/material/Button';

class Tadbirlar extends Component {
  state = { 
    data:[],
    more: 6,
    datSlice:[]
   } 
  componentDidMount() {
    axios.get(`${baseUrl}/api/events/`)
      .then((res) => {
        const data = res.data;
        this.setState({ datSlice: data, data: data });
      }
    )
  }
  loadMore = () => {
    this.setState({
      more: this.state.more + 6,
    })
    setTimeout(() => {
      this.setState({
        data: this.state.datSlice.slice(0, this.state.more)
      })
    }, 500);
  }
  render() { 
    var t = this.props.t
    var til = this.props.til 
    return (
      <React.Fragment>
        <div className="container">
          <div className="xpk__loyixalar">
            <div className="loyiha__block">
              <div className='loyixa__items'>
                {this.state.data.map((a) => {
                  return(
                    <a 
                      href={`events/${a.id}`} 
                      className='loyixa__item' 
                      key={a.id}
                    >
                      <img src={baseUrl + a.img1} alt="" />
                      <h1>
                        {
                        til === "uz" ? a.name
                        : til === "ru" ? a.name_ru
                        : til === "oz" ? a.name_uz
                        : a.name_en
                        }
                      </h1>
                      <p>
                        {
                        til === "uz" ? a.mini_text
                        : til === "ru" ? a.mini_text_ru
                        : til === "oz" ? a.mini_text_uz
                        : a.mini_text_en
                        }
                      </p>
                      <span>{a.date}</span>
                    </a>
                  )
                })}
              </div>
              <div className="show__more">
                <Button onClick={this.loadMore} variant="outlined" className=''>{t("MORE")}</Button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Tadbirlar;