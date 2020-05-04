import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image_list_2 from '../assets/images/blog/image-list-2.jpg';
import image_list_3 from '../assets/images/blog/image-list-3.jpg';
import image_list_4 from '../assets/images/blog/image-list-4.jpg';
import image_list_6 from '../assets/images/blog/image-list-6.jpg';

class ImmigrantList extends Component {
  render() {
    return (
      <div className="page-margin">
        <div className="breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title"><span>Immigrant Stories</span></h2>
              </div>
              <div className="col-md-6 col-sm-6 col-text-center">
                <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active"><Link to="/immigrant-finances">Immigrant Stories</Link></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Section */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="row blog-list">
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-block">
                        <div className="blog-box">
                          <div className="overflow-hidden"><Link to="/immigrant-finances-article-1"><img src={image_list_3} alt="blog" className="img-fluid" /></Link></div>
                        </div>
                      </div>
                      <div className="blog-text">
                        <Link to="/immigrant-finances-article-1">
                          <h3>Small Budget Retirement</h3>
                          <p>Immigrant Finances #1: Learn the art from an immigrant, who is optimizing savings, earnings and investing to reach FI in the next 10 years.</p>
                        </Link>
                        <h5>Written by: Grokking Money</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-block">
                        <div className="blog-box">
                          <div className="overflow-hidden"><Link to="/immigrant-finances-article-2"><img src={image_list_2} alt="blog" className="img-fluid" /></Link></div>
                        </div>
                      </div>
                      <div className="blog-text">
                        <Link to="/immigrant-finances-article-2">
                          <h3>Money Saved Is Money Earned</h3>
                          <p>Immigrant Finances #2: Sebastian shares his knowledge of finance topics in order to help others understand finance and reach their money goals.</p>
                        </Link>
                        <h5>Written by: Grokking Money</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-block">
                        <div className="blog-box">
                          <div className="overflow-hidden"><Link to="/immigrant-finances-article-3"><img src={image_list_4} alt="blog" className="img-fluid" /></Link></div>
                        </div>
                      </div>
                      <div className="blog-text">
                        <Link to="/immigrant-finances-article-3">
                          <h3>Dreamer Money</h3>
                          <p>Immigrant Finances #3: Javi from Dremer Money explains his vision and how he is helping #DREAMers and the #decamented to get rid of #studentloans and #consumerdebt</p>
                        </Link>
                        <h5>Written by: Grokking Money</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-block">
                        <div className="blog-box">
                          <div className="overflow-hidden"><Link to="immigrant-finances-article-4"><img src={image_list_6} alt="blog" className="img-fluid" /></Link></div>
                        </div>
                      </div>
                      <div className="blog-text">
                        <Link to="immigrant-finances-article-4">
                          <h3>Financial Freedom Countdown</h3>
                          <p>Immigrant Finances #4: Learn from the the owner of Financial Freedom Countdown that is dedicated to helping you think differently about your financial challenges and how to live your best life.  </p>
                        </Link>
                        <h5>Written by: Grokking Money</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ImmigrantList