import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import circle_2 from '../assets/images/feature-circle-two.png';
import circle from '../assets/images/feature-circle.png';
import banner from '../assets/images/main-banner1.png';
import light from '../assets/images/light.png';
import mob from '../assets/images/screenshot-mob.png';
import light_right from '../assets/images/light-right.png';
import img_2 from '../assets/images/app/2.jpg';
import img_3 from '../assets/images/app/3.jpg';
import img_4 from '../assets/images/app/4.jpg';
import img_5 from '../assets/images/app/5.jpg';
import img_6 from '../assets/images/app/6.jpg';
import img_7 from '../assets/images/app/7.jpg';
import img_8 from '../assets/images/app/8.jpg';
import img_9 from '../assets/images/app/9.jpg';
import img_10 from '../assets/images/app/10.jpg';
import img_11 from '../assets/images/app/11.jpg';
import img_1 from '../assets/images/app/1.jpg';

class Products extends Component {

  componentDidMount() {
    //setTimeout(function () {
    //document.querySelector(".loader-wrapper").style = "display: none";
    //}, 2000);
  }
  render() {

    // OwlCarousel Option for Screenshot
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
        <section id="screenshot" className="screenshot padding-top-bottom">
          <br/><br/>
          <div className="screenshot-decor">
            <div className="screenshot-circle1"><img src={circle_2} alt="feature-circle-two" /></div>
            <div className="screenshot-circle2"><img src={circle} alt="feature-circle" /></div>
            <div className="screenshot-circle3"><img src={banner} alt="feature-circle-three" /></div>
          </div>
          <div className="container">
            <div className="row page-margin"></div>
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
                    <div className="screenshot-item"><img src={img_2} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_3} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_4} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_5} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_5} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_6} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_7} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_8} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_9} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_10} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_11} alt="app" /></div>
                    <div className="screenshot-item"><img src={img_1} alt="app" /></div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default Products;