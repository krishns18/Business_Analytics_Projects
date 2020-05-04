import React from 'react';
import { Link } from 'react-router-dom';
import t_2 from '../assets/images/Testimonial2.png';
import t_1 from '../assets/images/Testimonial1.png';

class Error extends React.Component {

  render() {

    return (
      <div className="page-margin">
        <div className="authentication-form not-found">
          <div className="innerpage-decor">
            <div className="innerpage-circle1"><img src={t_2} alt="" /></div>
            <div className="innerpage-circle2"><img src={t_1} alt="" /></div>
          </div>
          <div className="text-center">
            <h2 className="error-font">4<span>0</span>4</h2>
            <h2 className="f-bold">Not found</h2>
            <div className="col-md-8 offset-md-2 col-12">
              <h3>The page you are attempting to reach is currently not available. This may be because
              the page does not exist or has been moved.
            </h3>
            </div>
            <div className="mt-5">
              <Link to="/" className="btn btn-custom theme-color theme-color pt-2 pb-2">BACK TO HOME PAGE</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Error;