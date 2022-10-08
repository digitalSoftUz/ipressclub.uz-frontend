import React, { Component } from 'react';

class Media extends Component {
  state = {  } 
  render() { 
    var t = this.props.t 
    var til = this.props.til 
    return (
      <React.Fragment>
        <div className="container">
          <div className="media">
            <div className="xpk__title">
              <h1>{t("VIDEO")}</h1>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Media;