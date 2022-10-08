import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from "../../contants";
import Button from '@mui/material/Button';
// import ReactPaginate from 'react-paginate';
import { SemipolarLoading } from 'react-loadingg';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

class Loyixalar extends Component {
  
  constructor(props) {
    super(props)

    this.state = { 
      data:[],
      projects: this.props.projects,
      key: "",
      num: "0",
      filter: false,
      load: false,
      menu: false,
      more: 6,
      datSlice:[]
    } 
  }
  componentDidMount() {
    axios.get(`${baseUrl}/api/projects/`)
      .then((res) => {
        this.setState({ load: true });
        setTimeout(() => {
          const data = res.data;
          this.setState({ datSlice: data, data: data, load: false });
        }, 700);
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
  handleFilter = () =>{
    if (this.state.key !== "") {
      this.setState({
        filter: true
      })
    }
  }
  handleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }
  handleNum = (k,n) =>{
    this.setState({
      load:true,
      num: n,
      menu: false,
    })
    setTimeout(() => {
      this.setState({
        key: k,
        load: false
      })
    }, 600);
  }
  scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  render() { 
    var t = this.props.t
    var num = this.state.num
    var til = this.props.til 
    var Pcategory = this.props.Pcategory
    return (
      <React.Fragment>
        <div className="container">
        <div className="xpk__loyixalar">
          <div className='xpk__loyixalar__title'>
            <h1>{t("HOME.NAV1")} {t("PROJECTS")}</h1>
            <Button variant="outlined" onClick={this.handleMenu}>
              <ListOutlinedIcon/>
            </Button>
          </div>
          <div className="loyixalar__content">
            {this.state.load === true
            ? <div className="loading__block">
              <SemipolarLoading color='orange' size='large'/>
            </div>
            : <div className="loyiha__block">
              <div className='loyixa__items'>
              {this.state.data.map((a) => {
                // return(
                //   <p>{a.a}</p>
                // )
                if (this.state.search === false) {
                  return(
                    <a 
                      href={`projects/${a.id}`} 
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
                } else{
                  if (a.category.name.toUpperCase().includes(this.state.key.toUpperCase())) {
                    return(
                      <a 
                        href={`projects/${a.id}`} 
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
                  }
                }
              })}
            </div>
            <div className="show__more">
              <Button onClick={this.loadMore} variant="outlined" className=''>{t("MORE")}</Button>
            </div>
              
            </div>
            }
            <div className={this.state.menu === false ?"loyiha__nav__container": "loyiha__nav__container filter__show"}>
            <div className='loyixa__nav'>
              <button onClick={() => {this.handleNum("", "0")}} className={num === "0" ? "project__active" : "" }>{t("ALL")}</button>
              {Pcategory.map((p)=>{
                return(
                  <button onClick={() => {this.handleNum(p.name ,p.id)}} className={num === p.id ? "project__active" : "" } key={p.id}>
                    {
                      til === "uz" ? p.name
                      : til === "ru" ? p.name_ru
                      : til === "oz" ? p.name_uz
                      : p.name_en
                    }
                  </button>
                )
              })}
            </div>
            </div>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Loyixalar;