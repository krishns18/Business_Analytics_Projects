import React, { Component } from 'react';
import team_1 from '../assets/images/team1.png';
import main_banner from '../assets/images/main-banner1.png';
import amazon_pic from '../assets/images/amazon.png';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { Link } from 'react-router-dom';

class Improve extends Component {
  render() {
    return(
      <section id="about" className="about">
            <div className="about-decor">
               <div className="about-circle1"><img src={team_1} alt="team1" /></div>
               <div className="about-circle2"><img src={main_banner} alt="banner1" /></div>
            </div>
            <div className="container">
               <div className="row ">
                  <div className="col-md-5">
                     <div className="about-contain">
                        <div>
                           <h2 className="title">Participate In<span> Survey</span></h2>
                           <p className="caption-about"><span>We Are Still Evolving! Your feedback matters...</span></p>
                           <p><b>Help us improve and enter in a chance to win 2 x $50, 1 x $25 amazon gift cards.</b></p>
                           <small>Draw happens on May 10, 2020.</small>
                           <div className="top-margin">
                              <Link to="/survey" className="btn btn-custom theme-color theme-color">Participate in Survey</Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-7 d-medium-none">
                     <div className="about-right">
                        <div className="about-phone">
                           <img src={amazon_pic} className="img-fluid" alt="aboutus" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
  }
}

export default Improve