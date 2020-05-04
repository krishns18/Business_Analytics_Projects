import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image_list_4 from '../assets/images/blog/image-list-big-4.jpg';

class IFA3 extends Component {
  render() {
    return (
      <div className="page-margin">
        <div className="breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title">Dreamer Money</h2>
              </div>
              <div className="col-md-6 col-sm-6 col-text-center">
                <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active"><Link to="/immigrant-finances">Immigrant Stories</Link></li>
                    <li className="breadcrumb-item active"><a href={null}>#3</a></li>
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
                      <h3 className="blog-head">Immigrant Finances #3: Dreamer Money</h3>
                    </a>
                    <div className="blog-divider"></div>
                    <div className="blog-description">
                      <p className="f-color"><b>Question: </b>Can you tell us about yourself? Please include any details you feel comfortable sharing about how long you’ve been in the US, what you do for a living and your income range.</p>
                      <p><b>Answer: </b> My name is Javi. I am the creator and owner of DreamerMoney.com–a personal finance blog for DACA Dreamers and immigrants. I am originally from Mexico and have been in the U.S. since I was 12 years old.</p>
                      <p>I am a content marketer, blogger, and personal finance junkie. We have a net worth of over $50,000 and are part of the 22% tax bracket.</p>
                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What was your relationship with money during the early days of your life? How did it influence your finances?</p>
                      <p><b>Answer: </b> I grew up poor, so there was always a feeling of needing money for everything. That’s why I am still a very frugal person. We save or invest most of our money. When I got married I wanted to start our marriage with healthy money habits. I simply didn’t want money to be a problem in my marriage like I had seen in other marriages.</p>
                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What are some money mistakes you have committed? What lessons did you learn from it?</p>
                      <p><b>Answer: </b>When I was in college I was afraid to have a bank account because of my legal status. So I cashed a lot of checks at the convenience store. That cost me a lot of money in fees. However, it also helped me evaluate the cost of banking and how it affects many immigrants who are unbanked.</p>

                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What is your view on debt? Do you carry any form of debt? Has it ever been a source of stress in your life?</p>
                      <p><b>Answer: </b> We are debt free. We do not carry debt. Before we paid off student loans and car loans it wasn’t stressful as much as it was a challenge. But during our debt free journey, our marriage and relationship got stronger and our net worth skyrocketed.</p>

                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>How is your money invested? Does being an immigrant have any influence on your investment decisions?</p>
                      <p><b>Answer: </b> We have Roth IRAs, mutual funds, and ETFs. Being an immigrant hasn’t really influenced how I invest–I have simply talked to successful millionaires and what they do. I like to be a very lazy investor–meaning that I don’t invest in individual stocks. I like to pick the best performing mutual funds, invest and forget about it.</p>
                      <p>I don’t use any advisors. Most of our net worth is in Roth IRAs cash savings and non-retirement brokerage accounts. I have both index funds and mutual funds. I get allow of investing advice from successful family members and DIY investors…and of course all the literature they read and subscribe to</p>

                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>Do you have any specific money situation as an immigrant (e.g. supporting an aging parent or family overseas) that influences your finances?</p>
                      <p><b>Answer: </b> We give a lot to my family in Mexico. I have younger siblings living in Mexico and so I help support them. We always make sure to put that in our budget every month.</p>


                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What are some of the apps or tools you use to manage your finances?</p>
                      <p><b>Answer: </b> Personal Capital, book and pencil. That’s about the only tools I use to budget.</p>

                      <div className="blog-divider"></div>
                      <p className="f-color"><b>Question: </b>What money advice do you have for new immigrants who arrive in the US?</p>
                      <p><b>Answer: </b> Become financially literate. Learn the American economic system, the difference between assets and liabilities and always have a backup plan.</p>
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

export default IFA3