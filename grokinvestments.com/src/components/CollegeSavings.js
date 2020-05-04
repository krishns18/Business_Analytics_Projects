import React, { Component } from 'react';
import team_1 from '../assets/images/feature2.png';
import { Link } from 'react-router-dom';

class CollegeSavings extends Component {
  render() {
    return (
      <section id="feature" className="feature">
        <div className="feature-decor">
          <div className="feature-circle1"><img src={team_1} alt="" /></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-8">
              <div className="row about-contain">
                <h2 className="title"><span>529 College Savings Plans</span></h2>
                <p className="caption-about"><span>529 plans provide flexible, tax-advantage accounts designed specifically for education savings. Funds can be used for qualified education expenses for schools nationwide.</span></p>
              </div>
              <div className="top-margin">
                <Link type="button" className="btn btn-custom theme-color theme-color" to="/contact-us">Learn more</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default CollegeSavings