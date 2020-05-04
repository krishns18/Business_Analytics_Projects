import React, { Component } from 'react';
import team_1 from '../assets/images/feature2.png';
import { Link } from 'react-router-dom';

class MutualFunds extends Component {
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
                <h2 className="title"><span>Mutual Funds</span></h2>
                <p className="caption-about"><span>Mutual funds are a practical, cost-efficient way to build a diversified portfolio of stocks, bonds, or short-term investments.</span></p>
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

export default MutualFunds