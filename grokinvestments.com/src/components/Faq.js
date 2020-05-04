import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import circle_2 from '../assets/images/Testimonial2.png';
import circle_1 from '../assets/images/Testimonial1.png';

class Faq extends Component {
  render() {
    return (
      <div>
        <div className="page-margin">
          <div className="breadcrumb-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                  <h2 className="title"><span>FAQ</span></h2>
                </div>
                <div className="col-md-6 col-sm-6 col-text-center">
                  <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                    <ol className="breadcrumb bg-transparent mb-0">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active"><Link to="/faq">FAQ</Link></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ */}
          <section>
            <div className="innerpage-decor">
              <div className="innerpage-circle1"><img src={circle_2} alt="" /></div>
              <div className="innerpage-circle2"><img src={circle_1} alt="" /></div>
            </div>
            {/*faq in*/}
            <div className="faq">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="accordion">
                      <div className="card border-theme mb-3 radius-0">
                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <a className="">Investing seems complicated. How do I get started?<i className="fa fa-angle-down"></i></a>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div className="card-body">
                          The first step is to determine whether you want to plan a short-term or long-term investment. If you’re saving for retirement, for instance, you may choose to invest in a target-date fund, a type of mutual fund that automatically adjusts your investment mix based on your age and how soon you’d like to retire, or do more research on the types of investments that make sense for your risk tolerance and consider rebalancing your portfolio.
                          </div>
                        </div>
                      </div>
                      <div className="card border-theme mb-3 radius-0">
                        <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <a className="" >What type of investments are available to the average person?<i className="fa fa-angle-down"></i></a>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div className="card-body">
                          Stocks, Bonds—investments, real estate or commodities &amp; exchange-traded funds, or ETFs.
                                             </div>
                        </div>
                      </div>
                      <div className="card border-theme mb-3 radius-0">
                        <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <a className="" >Why should I prioritize retirement over non-retirement investing?<i className="fa fa-angle-down"></i></a>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                          <div className="card-body">
                          The reason is simple: Many of us have paltry nest eggs—36% of people have less than $1,000 stashed away for retirement. We’ll all retire someday, but most of us are under-saved for it.
                                             </div>
                        </div>
                      </div>
                      <div className="card border-theme radius-0">
                        <div className="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <a className="" >What type of retirement account should I have? <i className="fa fa-angle-down"></i></a>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                          <div className="card-body">
                          This will depend entirely on your investing goals, income level, employment status and tax situation. But consider opening a retirement account as your first order of business because retirement savings is generally described as one of the pillars of financial security.
                                             </div>
                        </div>
                      </div>
                      <div className="card border-theme radius-0">
                        <div className="card-header" id="headingFive" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          <a className="" >How else can investing affect my taxes? <i className="fa fa-angle-down"></i></a>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                          <div className="card-body">
                          Traditional IRAs and 401(k)s are pre-taxed because they provide a tax break in the year that you make the contribution by reducing your taxable income. If you’re investing in a taxable brokerage account, you usually won’t get tax breaks, and you’ll pay taxes on your earnings anytime you sell a holding, known as capital gains.
                                             </div>
                        </div>
                      </div>
                      <div className="card border-theme radius-0">
                        <div className="card-header" id="headingSix" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          <a className="" >Why is risk tolerance important, and how can I figure out what mine is? <i className="fa fa-angle-down"></i></a>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                          <div className="card-body">
                          Risk tolerance comes down to how much risk you are willing and able to stomach, and it’s important to know because it can impact how you shape your portfolio. The closer you are to needing the money, the more likely you should consider shifting to conservative investments.
                                             </div>
                        </div>
                      </div>
                      <div className="card border-theme radius-0">
                        <div className="card-header" id="headingSeven" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          <a className="" >What could impact a company's market cap?<i className="fa fa-angle-down"></i></a>
                        </div>
                        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                          <div className="card-body">
                          There are several factors that could impact a company's market cap. Significant changes in the value of the shares—either up or down—could impact it, as could changes in the number of shares issued.
                                             </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*faq up*/}
          </section>
        </div>

      </div>
    )
  }
}

export default Faq