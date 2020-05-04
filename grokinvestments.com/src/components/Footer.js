import React, { Component } from 'react';
import locate from '../assets/images/locate.png';
import email from '../assets/images/fotter-email.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <section className="p-0">
          <div className="container-fluid">
            <div className="bottom-section">
              <div className="row">
                <div className="col-md-6 p-0">
                  <div className="address-bar">
                    <div>
                      <ul className="footer-style">
                        <li>
                          <div className="footer-icon">
                            <img src={locate} alt="locate" />
                          </div>
                          <div className="footer-address">
                            <a href={null}>835 Market Street, San Francisco, CA</a>
                          </div>
                        </li>
                        <li>
                          <div className="footer-icon">
                            <img src={email} alt="fotter-email" />
                          </div>
                          <div className="footer-address">
                            <a href={null}>grokinvestments@gmail.com</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  {/* <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d35391.48685150366!2d72.77537852898678!3d21.18930639680146!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1530610361925" allowFullScreen className="md-height"></iframe>*/}
                  <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2133613722463!2d-122.40870368452013!3d37.78503927975752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580860054e437%3A0x6333c142a280f9ca!2s835%20Market%20St%2C%20San%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1587757584424!5m2!1sen!2sus"  allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="copyright-section index-footer">
          <p>&copy; Grok Investments | 2020</p>
        </div>

        <div className="tap-top">
          <div>
            <i className="fa fa-angle-double-up"></i>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer