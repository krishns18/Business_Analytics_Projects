import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class Quiz1 extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    let allQuiz = [
      {
        link: "https://grokinvestments.typeform.com/to/nVjhw3"
      }
    ]
    let DataList = allQuiz.map((val, i) => {
      return (
        <div className="col-lg-12 col-md-12" key={i}>
          <div className="blog-item">
            <div className="blog-block">
              <div className="blog-box">
                <div className="overflow-hidden">
                  <div className="embed-responsive embed-responsive-4by3">
                    <ReactTypeformEmbed url={val.link} />
                  </div>
                  <div className="blog-divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    });

    return (
      <div className="page-margin">
        <div className="breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title">Investment Quiz 1</h2>
              </div>
              <div className="col-md-6 col-sm-6 col-text-center">
                <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active"><Link to="/learn">Learn</Link></li>
                    <li className="breadcrumb-item ">Quiz 1</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*Section*/}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-9 blog-sec">
                <div className="row blog-list">
                  {DataList}
                </div>
              </div>
              <div className="col-md-4 col-lg-3 order-md-last list-sidebar">
                <div className="sidebar">
                <div className="sidebar-space">
										<h4 className="blog-title">Categories</h4>
										<div className="blog-divider"></div>
										<div className="blog-cat-detail">
											<ul>
												<li className="marg-15">
													<Link to="/learn">
														<i className="fa fa-angle-right" aria-hidden="true"></i>All
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/all-videos">
														<i className="fa fa-angle-right" aria-hidden="true"></i> Videos
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/all-articles">
														<i className="fa fa-angle-right" aria-hidden="true"></i> Articles
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/quiz">
														<i className="fa fa-angle-right" aria-hidden="true"></i> Quiz
			                    </Link>
												</li>
											</ul>
										</div>
									</div>
                  <div className="sidebar-space">
                    <h4 className="blog-title">Popular Tag</h4>
                    <div className="blog-divider"></div>
                    <div className="tags marg-20">
                      <span className="badge badge-theme">Investing</span>
                      <span className="badge badge-theme">Basics of Investing</span>
                      <span className="badge badge-theme">Stocks</span>
                      <span className="badge badge-theme">Mutual Funds</span>
                      <span className="badge badge-theme">Financial Risk</span>
                      <span className="badge badge-theme">Beginners</span>
                      <span className="badge badge-theme">Learn 101</span>
                      <span className="badge badge-theme">Fixed Income</span>
                      <span className="badge badge-theme">Wealth Management</span>
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

export default Quiz1