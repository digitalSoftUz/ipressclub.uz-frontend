import React, { useState, useEffect } from 'react';
import axios from 'axios';
import i18next from 'i18next'
import NavUp from './NavUp';
import { PC } from '../context/context';
import Button from '@mui/material/Button';
import { baseUrl } from '../contants';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, Link } from 'react-router-dom';
import Modal from "../components/home/Modal/Modal"
import Search from './Search';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

// import images
import Live from "../assets/icons/live.svg"
import Logo from "../assets/icons/favicon.ico"

const Navbar = (props) => {
  var t = props.t
  var til = i18next.language
  const [open, setOpen] = useState(false);
  const [video_url, setvideo_url] = useState("");
  const [title, settitle] = useState('');
  const [stream, setStream] = useState(false)
  const [item , setItem] = useState([])
  const OpenModal = (item) => {
    setvideo_url(item.link);
    settitle(
      til === "uz" ? item.title
      : til === "ru" ? item.title_ru
      : til === "oz" ? item.title_uz
      : item.title_en
    )
    setOpen(true);
  };
  
  // console.log(video_url, title)
  // const item = 
  //   {
  //     id:1,
  //     title:'Press Club Andijonga safari',
  //     url:'https://youtu.be/tpCYFHrh5VY',
  //   }
  useEffect(()=>{
    async function getStream() {
      try {
        const res = await axios.get(`${baseUrl}/api/streaming/`)
        if(res){
          setItem(res.data)
          setStream(res.data.status)
        }
      } catch (err) {
        console.log(err);
      }
    }
    getStream()
  }, [])
  
  return (
    <PC.Consumer>
      {(x)=>{
        const menu = (
          <Menu
            items={[
              {
                label: <Link onClick={()=>{x.handleburger(); x.scrollTop()}} to="/xpk">{t("XPK")}</Link>,
                key: '0',
              },
              {
                label: <Link onClick={()=>{x.handleburger(); x.scrollTop()}} to="/council">{t("JK")}</Link>,
                key: '1',
              },
              {
                label: <Link onClick={()=>{x.handleburger(); x.scrollTop()}} to="/team">{t("XPKJ")}</Link>,
                key: '3',
              },
              {
                label: <Link onClick={()=>{x.handleburger(); x.scrollTop()}} to="/projects">{t("HOME.NAV2")}</Link>,
                key: '4',
              },
            ]}
          />
        );
        return(
          <React.Fragment>
            <NavUp/>
            <div className="nav" >
            <div className={x.scroll > 250 ? "nav__scrolled" : ""}>
            <div className="container">
              <div className="navbar">
                <div className="logo">
                  <a href="/">
                    <img src={Logo} alt="" />
                    <p>
                      {t("LOGO1")}<span>{t("LOGO2")}</span>
                    </p>
                  </a>
                </div>
                <nav>
                  <ul className={x.burger ? "" : "menu_show"}>
                    <Button onClick={x.handleburger} className='burger__btnclose'>
                      <CloseIcon color='action'/>
                    </Button>
                    <li>
                      <Dropdown overlay={menu} trigger={['click']}>
                        <a href='/' onClick={(e) => e.preventDefault()}>
                          <Space>
                            {t("HOME.NAV1")}
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                    </li>
                    {/* <li><NavLink onClick={()=>{x.handleburger(); x.scrollTop()}} to="/xpk">{t("HOME.NAV1")}</NavLink></li> */}
                    {/* <li><NavLink onClick={()=>{x.handleburger(); x.scrollTop()}} to="/projects">{t("HOME.NAV2")}</NavLink></li> */}
                    {/* <li><NavLink onClick={()=>{x.handleburger(); x.scrollTop()}} to="/team">{t("JAMOA")}</NavLink></li> */}
                    <li><NavLink onClick={()=>{x.handleburger(); x.scrollTop()}} to="/events">{t("TADBIR")}</NavLink></li>
                    {/* <li><NavLink onClick={()=>{x.handleburger(); x.scrollTop()}} to="/news">{t("HOME.NAV3")}</NavLink></li> */}
                    {/* <li><a onClick={x.handleburger} href="#hamkorlar">{t("HOME.NAV4")}</a></li> */}
                    {/* <li><NavLink onClick={x.handleburger} to="/media">{t("HOME.NAV5")}</NavLink></li> */}
                    <li><a onClick={x.handleburger} href="#aloqa">{t("HOME.NAV6")}</a></li>
                  </ul>
                  <Modal video_url={video_url} open={open} setOpen={setOpen} title={title} />
                  <Button 
                    variant='contained'
                    color='error' 
                    className='go__live'
                    onClick={() => OpenModal(item)} 
                    disabled={stream === false ? true : false}
                  >
                      <img src={Live} alt="" />
                      Live
                  </Button>
                  <button onClick={x.handleSearch_btn} className='search__btn'>
                    {/* {x.search_btn ? <SearchIcon/> : <CloseIcon/>} */}
                    <SearchIcon color='action'/>
                  </button>
                  <button onClick={x.handleburger} className='burger__btnopen'>
                    <MenuIcon color='action'/>
                  </button>
                </nav>
                <div onClick={x.handleburger} className={x.burger ? "nav__shadow" : "nav__shadow shadow_show"}></div>
              </div>
            </div>
            </div>
            </div>
            <div className={x.search_btn ? "search" : "search search__open"}>
              <Search newsAll={props.newsAll}/>
            </div>
          </React.Fragment>
        )
      }}
    </PC.Consumer>
  );
}
 
export default Navbar;