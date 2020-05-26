import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import 'react-modal-video/scss/modal-video.scss';
import OwlCarousel from 'react-owl-carousel';
import Subscribe from './Subscribe';
import Featured from './Featured';
import Improve from './Improve';
import Testimonials from './Testimonials';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import home_3 from '../assets/images/home3/owl.png';
import circle_2 from '../assets/images/feature-circle-two.png';
import circle from '../assets/images/feature-circle.png';
import banner from '../assets/images/main-banner1.png';
import light from '../assets/images/light.png';
import mob from '../assets/images/screenshot-mob.png';
import light_right from '../assets/images/light-right.png';

import img_2 from '../assets/images/app/college_savings.jpg';
import img_3 from '../assets/images/app/income_bonds.jpg';
import img_4 from '../assets/images/app/mutual_funds.jpg';
import img_5 from '../assets/images/app/retirements.jpg';
import img_1 from '../assets/images/app/stocks.jpg';
import quiz_2 from '../assets/images/quiz-2.png';
import quiz_1 from '../assets/images/quiz-1.png';

class Home extends Component {
  componentDidMount() {
    //setTimeout(function () {
    //document.querySelector(".loader-wrapper").style = "display: none";
    //}, 2000);
  }
  render() {
    const options = {
      0: {
        items: 2,
      },
      767: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5
      }
    };
    return (
      <div>

        <section id="home" className="home home-one vertical-scrolling">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <div className="home-contain">
                  <div className="text-white">
                    <div className="home-contain">
                      <div>
                        <p style={{ 'fontWeight': 400, fontSize: '18px' }} >Immigrants, Students &amp; Minorities</p>
                        <h1>
                          <span className="f-color">We love all</span>
                        </h1>
                        <p style={{ 'fontWeight': 400, fontSize: '20px' }} className="f-color">Embark on your financial journey with us.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="home-right">
                  <Tilt options={{ perspective: 110, speed: 100, max: 2.2, scale: 1 }}>
                    <img src={home_3} className="img-fluid" alt="slider-caption" />
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="screenshot" className="screenshot padding-top-bottom">
          <div className="screenshot-decor">
            <div className="screenshot-circle1"><img src={circle_2} alt="feature-circle-two" /></div>
            <div className="screenshot-circle2"><img src={circle} alt="feature-circle" /></div>
            <div className="screenshot-circle3"><img src={banner} alt="feature-circle-three" /></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title">Our <span>Products</span></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 ">
                <div className="screenshot-contain">
                  <img className="mobile-light-left" src={light} alt="light" />
                  <img className="mob-mocup img-fluid" src={mob} alt="screenshot-mob" />
                  <img className="mobile-light-right" src={light_right} alt="light-right" />
                  <OwlCarousel
                    className="screenshot-carousel owl-carousel owl-theme"
                    loop={true}
                    margin={30}
                    items={5}
                    center={true}
                    dots={false}
                    autoplay={true}
                    autoplayTimeout={2000}
                    responsive={options}
                  >
                    <div className="screenshot-item"><Link to="/college-savings"><img src={img_2} alt="app" /></Link></div>
                    <div className="screenshot-item"><Link to="/income-bonds"><img src={img_3} alt="app" /></Link></div>
                    <div className="screenshot-item"><Link to="/mutual-funds"><img src={img_4} alt="app" /></Link></div>
                    <div className="screenshot-item"><Link to="/retirements"><img src={img_5} alt="app" /></Link></div>
                    <div className="screenshot-item"><Link to="/stocks"><img src={img_1} alt="app" /></Link></div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Quiz List */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title">Take Our<span> Quiz</span></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="row blog-list">
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-block">
                        <div className="blog-box">
                          <div className="overflow-hidden"><Link to="/quiz-1"><img src={quiz_1} alt="blog" className="img-fluid" /></Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-block">
                        <div className="blog-box">
                          <div className="overflow-hidden"><Link to="/quiz-2"><img src={quiz_2} alt="blog" className="img-fluid" /></Link></div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Featured />
        <Improve />
        <Testimonials />
        <Subscribe />
      </div>
    )
  }
}

export default Home