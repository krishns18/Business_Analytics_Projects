import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import black_logo from '../assets/images/black-logo.png';

class Navbar extends Component {
  state = {
    toggle: false
  }
  toggleNav = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  componentDidMount() {
    //setTimeout(function () {
    //document.querySelector(".loader-wrapper").style = "display: none";
    //}, 2000);
  }
  render() {
    const navClass = `collapse navbar-collapse default-nav ${this.state.toggle ? 'show' : ''}`;
    return (
      <nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top">
        <div id="navbar-main" className="container">
          <Link className="navbar-brand" to="/"><img src={black_logo} alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={navClass} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" id="mymenu">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#blog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/stocks">Stocks</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/retirements">Retirement and IRAs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/income-bonds">Fixed Income and Bonds</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mutual-funds">Mutual Funds</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/college-savings">529 College Savings Plans</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learn">Learn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/immigrant-finances">Success Stories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">Faq</Link>
              </li>
              <li className="nav-item">
              <Link to="/survey" className="nav-link btn btn-secondary theme-color theme-color ">Participate in Survey</Link>
              </li>
              {/* Add more */}
            </ul>
          </div>
          {/* Main container ends */}
        </div>
        {/*Navbar Ends*/}
      </nav >
    )
  }
}

export default Navbar