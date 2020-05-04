import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import testimonial_2 from '../assets/images/Testimonial2.png';
import testimonial_1 from '../assets/images/Testimonial1.png';  

class Testimonials extends Component {
  render() {
    const options = {
      0: {
        items: 1,
        dots: true,
        nav: false
      },
      600: {
        items: 1,
        dots: true,
        nav: false
      },
      991: {
        items: 1,
        margin: 15,
      },
      1000: {
        items: 1
      }
    };

    // Dynamic Testimonial Easy to Update
    let data = [
      { name: 'Aaron Smith', description: 'You think you need thousands of dollars to invest, it\'s for the rich folks... not anymore because there is grok investments.'},
      { name: 'Jackie Bowman', description: 'Investing is one of the most effective ways to build wealth. With grok investments, I am confident about it!!!'},
      { name: 'Naina Sharma', description: 'Just loved the interface. Well curated information!!!'}
    ];

    // Dynamic Testimonial Data Loop
    let DataList = data.map((val, i) => {
      return (
        <div className="testimonial-item" key={i}>
          <div className="testimonial-block">
            
            <div className="testimonial-text">
              <p>{val.description}</p>
              <h3>{val.name}</h3>
            </div>
          </div>
        </div>
      );
    });
    return (
      <section id="testimonial" className="testimonial">
        <div className="testimonial-decor">
          <div className="testi-circle1"><img src={testimonial_2} alt="" /></div>
          <div className="testi-circle2"><img src={testimonial_1} alt="" /></div>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-sm-12">
                   <h2 className="title">Our <span>Testimonials</span></h2>
                </div>
            <div className="col-lg-10 offset-lg-1">
              <OwlCarousel
                className="testimonial-carousel owl-carousel owl-theme"
                loop={true}
                margin={5}
                nav={true}
                navClass={['owl-prev', 'owl-next']}

                dots={false}
                responsive={options}
                autoplay={true}
                autoplayTimeout={2000}
              >
                {DataList}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials