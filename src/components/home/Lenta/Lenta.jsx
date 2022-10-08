import React from "react";
import { baseUrl } from "../../../contants";
import { PC } from "../../../context/context";
import { Container, Img, LogoDiv } from "./style";

import './Lenta.css'

const Lenta = () => {

  return (
    <PC.Consumer>
      {(x)=>{
        return(
          <Container>
            <div className="brand-wheel">
              <div className="brand-slide">
                {x.lenta?.map((item, index) => {
                  return (
                    <LogoDiv className="logo-div" key={index}>
                      <Img src={baseUrl+item.logo}/>
                    </LogoDiv>
                  );
                })}
              </div>
              <div className="brand-slide delay">
              {x.lenta?.map((item, index) => {
                  return (
                    <LogoDiv className="logo-div" key={index}>
                      <Img src={baseUrl+item.logo}/>
                    </LogoDiv>
                  );
                })}
              </div>
            </div>
          </Container>
        )
      }}
    </PC.Consumer>
  );
};

export default Lenta;
