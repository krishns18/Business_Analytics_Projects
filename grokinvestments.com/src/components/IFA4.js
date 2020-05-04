import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image_list_4 from '../assets/images/blog/image-list-big-4.jpg';

class IFA4 extends Component {
  render() {
    return (
      <div className="page-margin">
        <div className="breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title">Financial Freedom Countdown</h2>
              </div>
              <div className="col-md-6 col-sm-6 col-text-center">
                <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active"><Link to="/immigrant-finances">Immigrant Stories</Link></li>
                    <li className="breadcrumb-item active"><a href={null}>#4</a></li>
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
                <div className="blog-item">
                  <div className="blog-block">
                    <div className="blog-box">
                      <div className="overflow-hidden">
                        <a href={null}>
                          <img src={image_list_4} alt="blog" className="img-fluid" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-text">
                    <h6>June 12, 2019</h6>
                    <a href={null}>
                      <h3 className="blog-head">Immigrant Finances #4: Financial Freedom Countdown</h3>
                    </a>
                    <div className="blog-divider"></div>
                    <div className="blog-description">
                      <p className="f-color"><b>Question: </b>Can you tell us about yourself? Please include any details you feel comfortable sharing about how long you’ve been in the US, what you do for a living and your income range.</p>
                      <p><b>Answer: </b> I’ve been in the US for the last 13 years. Came here 12 years ago with only $1000. Did not have any other assets except my education and leveraged my Human Capital to achieve Financial Freedom. I work in the technology sector and highly recommend it as a career. Even if you never work in Tier 1 companies; you will still have plenty of career options in either engineering, management or support and can achieve Financial Freedom comfortably.</p>

                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What was your relationship with money during the early days of your life? How did it influence your finances?</p>
                      <p><b>Answer: </b> Growing up in a 3rd world country; we did not have much money but my parents were very conservative wrt spending. They only spent what they earned and saved the difference. Investing was never on the radar and that meant a higher percentage needed to be saved. Grew up in a cash-based society and I never even knew credit cards existed till I came to the US and found out how they worked. Since I was the only one from my family here; I had to learn everything about credit cards, investing, retirement accounts, buying a house, etc on my own. I would read a lot and internet search was my best friend. It helps that I do love to read. I have to give credit to my parents for ensuring that I always lived within my means even after my salary and investments grew exponentially.</p>

                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What are some money mistakes you have committed? What lessons did you learn from it?</p>
                      <p><b>Answer: </b> So many mistakes. Some due to my ignorance and others due to my own foolishness. As I mentioned when I came to the US I started working for a global consulting firm. They had a 401(K) with a very generous match but not knowing how it worked I never contributed to it for 4 years. I also started reading about stocks and watching CNBC so bought individual stocks many of which went to zero eventually. Also, dabbled in options trading and triple leveraged commodity ETFs. The losses I suffered in the early part of my life were more than 50% of my net worth but from a total $$ perspective they were recoverable and did not derail my Countdown to Financial Freedom. I still do invest in alternative assets but it is less than 30% of my total investable assets.</p>


                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What is your view on debt? Do you carry any form of debt? Has it ever been a source of stress in your life?</p>
                      <p><b>Answer: </b> My current debt is only my mortgage and I have it due to a very low fixed interest rate. I bought a new car with a loan but paid it off in 6 months. Debt has never been a source of stress and I believe one can use debt strategically to leverage as long as one is financially savvy.</p>

                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>How is your money invested? Does being an immigrant have any influence on your investment decisions?</p>
                      <p><b>Answer: </b> 70% of my investments are in the traditional index and asset-backed securities. The other 30% is spread across everything from cryptocurrencies to mining stocks to crowdfunded real estate. Being an immigrant I would consider capital preservation to be the highest priority at this stage and invest more conservatively than I would have if I was not an immigrant.</p>


                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>Do you have any specific money situation as an immigrant (e.g. supporting an aging parent or family overseas) that influences your finances?</p>
                      <p><b>Answer: </b> I do have older parents and my finances are geared towards supporting them. I have not yet made concrete plans at this stage wrt the amount and the nature of the support.</p>
                      
                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What are some of the apps or tools you use to manage your finances?</p>
                      <p><b>Answer: </b> I do have a large number (compared to the average personal finance community) of credit cards. I use Mint to check activity once a week.</p>

                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What money advice do you have for new immigrants who arrive in the US?</p>
                      <p><b>Answer: </b> This is a marathon and not a sprint. Follow other immigrant blogs and my goal by the end of 2019 is to have a comprehensive primer for not only immigrants but also others to follow influenced by my own trials and tribulations.</p>
                      <div className="blog-divider"></div>
                      <h5>Grokking Money</h5><h5 className="pull-right"> 10 <i className="fa fa-heart-o"></i>, 10 <i className="fa fa-comments-o"></i></h5>
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

export default IFA4