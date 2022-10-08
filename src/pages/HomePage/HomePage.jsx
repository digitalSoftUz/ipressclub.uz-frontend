import React from 'react';
import { PC } from '../../context/context';
import News from '../../components/home/News';
import Header from '../../components/home/Header';
import { useTranslation } from "react-i18next";
import WeekNews from '../../components/home/WeekNews';
import Loyixalar from '../../components/home/Loyixalar';
import Kengash from '../../components/home/Kengash/Kengash';
import VideoSlider from '../../components/home/VideoSlider';

const HomePage = () => {
  const { t } = useTranslation()

  return (  
    <PC.Consumer>
      {(x)=>{
        return(
          <React.Fragment>
            <Header       t={t} til={x.til}/> {/* tayyor */}
            <News         t={t} til={x.til} news4={x.news4} Fnews={x.Fnews} Lnews={x.Lnews}/> {/* tayyor */}
            <Loyixalar    t={t} til={x.til}/> {/* tayyor */}
            <WeekNews     t={t} til={x.til} data={x.data} week={x.week} nweek={x.nweek}/> {/* tayyor */}
            <VideoSlider  t={t} til={x.til} Regions={x.Regions}/> {/*  */}
            <Kengash      til={x.til}/> {/* tayyor */}
          </React.Fragment>
        )
      }}
    
    </PC.Consumer>
   ); 
}
 
export default HomePage;