import React, { Component } from 'react';
import { PC } from '../../context/context';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import phone from '../../assets/images/phone.png';
import phoneLeft from '../../assets/images/phoneleft.png';
import phoneRight from '../../assets/images/phoneright.png';

class Address extends Component {
  state = {  } 
  render() { 
    var t = this.props.t 
    return (
      <PC.Consumer>
        {(x)=>{
          return(
            <React.Fragment>
              <div className="address container">
                <div className="address-info">
                  <div>
                    <LocationOnIcon style={{color: "blue"}} />
                    <h4>{t("MANZIL")}</h4>
                    <p>{x.data.address}</p>
                  </div>
                  <div>
                    <PhoneInTalkIcon style={{color: "blue"}} />
                    <h4>{t("TEL")}</h4>
                    <a href={`tel: ${x.data.phone}`}>{x.data.phone}</a>
                  </div>
                  <div>
                    <EmailIcon  style={{color: "blue"}}/>
                    <h4>{t("POCHTA")}</h4>
                    <a href={`mailto: ${x.data.email}`}>{x.data.email}</a>
                  </div>
                </div>
                <div className="maps-wrapper">
                  <div className="maps-wrapper__left">
                    <iframe 
                      className="maps-iframe" 
                      title='googlemap'
                      src={x.data.map === ""
                        ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1594.8689679070085!2d69.25328827582688!3d41.3125337713155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b107b1753e3%3A0x9b6e23504f448e8c!2sMezhdunarodnyy%20Press-Klub!5e0!3m2!1sen!2s!4v16529" 
                        : `${x.data.map}` } 
                      width="600" 
                      height="450"
                    > </iframe>
                  </div>
                  <div className="maps-wrapper__right">
                    <img src={phoneLeft} alt="" />
                    <img src={phone} alt="" />
                    <img src={phoneRight} alt="" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        }}
      </PC.Consumer>
      
    );
  }
}
 
export default Address;