import React from 'react';
import AOS from 'aos';
import Xpk from './pages/XPK/XPK';
import Navbar from './views/Navbar';
import Footer from './views/Footer';
import Mode from './context/context';
import News from './pages/News/News';
import { PC } from "./context/context";
import Jamoa from './pages/Jamoa/Jamoa';
import Kengash from './pages/Kengash/Kengash';
// import Media from './pages/Media/Media';
import { useTranslation } from "react-i18next";
import Address from './components/home/Address';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import Lenta from './components/home/Lenta/Lenta';
import Loyixalar from './pages/Loyixalar/Loyihalar';
import Tadbirlar from './pages/Tadbirlar/Tadbirlar';
import NoMatch from './components/home/NoMatch/NoMatch';
import SingleNews from "./components/home/SinglePages/SingleNews"
import SingleEvents from './components/home/SinglePages/SingleEvents';
import SingleProject from './components/home/SinglePages/SingleProject';

import 'animate.css';
import 'aos/dist/aos.css';
import 'antd/dist/antd.min.css';
import "./style/css/_Import.css";

AOS.init();

const App = () => {
  const { t } = useTranslation()
  // console.log(location.pathname)
  return ( 
    <Mode>
      <PC.Consumer>
        {(x)=>{
          return(
            <React.Fragment>
              <Navbar   t={t} newsAll={x.newsAll}/> {/* tayyor */}
              <div className='routers'>
                <Routes>
                  <Route path="/"           element={<HomePage      />} />
                  <Route path="*"           element={<NoMatch       t={t}/>} />
                  <Route path="xpk"         element={<Xpk           t={t} til={x.til}/>} />
                  <Route path="council"     element={<Kengash       t={t} til={x.til}/>} />
                  <Route path="team"        element={<Jamoa         t={t} til={x.til}/>} />
                  <Route path="events"      element={<Tadbirlar     t={t} til={x.til}/>} />
                  <Route path="events:id"   element={<SingleEvents  t={t} til={x.til}/>} />
                  {/* <Route path="media"       element={<Media         t={t} til={x.til}/>} /> */}
                  <Route path="news"        element={<News          t={t} til={x.til} Fnews={x.Fnews} Lnews={x.Lnews} singlenews={x.singlenews}/>} />
                  <Route path="news/:id"    element={<SingleNews    t={t} til={x.til} Fnews={x.Fnews} Lnews={x.Lnews}/>} />
                  <Route path="projects"    element={<Loyixalar     t={t} til={x.til} Pcategory={x.Pcategory}  projects={x.projects}/>} />
                  <Route path="projects/:id"element={<SingleProject til={x.til}/>} />
                </Routes>
              </div>
              <div id='hamkorlar'></div>
              <div className='container'>
                <h1 className='title__h1'>{t("XPKH")}</h1>
              </div>
              
              <Lenta /> {/* tayyor */}
              <div id="aloqa"></div>
              <Address  t={t}/> {/* tayyor */}
              <Footer   t={t} til={x.til}/> {/* tayyor */}
            </React.Fragment>
          )
        }}
      </PC.Consumer>
      
    </Mode>
   );
}
 
export default App;
