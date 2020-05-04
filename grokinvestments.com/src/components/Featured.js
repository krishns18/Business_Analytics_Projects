import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import image_list_2 from '../assets/images/blog/image-list-2.jpg';
import image_list_3 from '../assets/images/blog/image-list-3.jpg';

class Featured extends Component {
  render() {
    // OwlCarousel Option for Blogs
    const options = {
       0: {
          items: 1,
          dots: true,
          margin: 5,
       },
       600: {
          items: 1,
          dots: true,
          margin: 0,
       },
       768: {
          items: 2,
          dots: true,
       },
       992: {
          items: 3,
       },
       1000: {
          items: 2
       }
    };

    // Dynamic Blog Data Easy to Update
    let data = [
      {
				channel: "Nate O'Brien",
				title: 'Stock Market For Beginners 2020 | How To Invest (Step by Step)',
				topic: 'Stock Market Basics',
				link: 'dFAiChOmoGI',
				description: 'In this video, I will show you how to invest in the stock market as a beginner in 2020. Get 2 Free Stocks on WeBull when you deposit $100 (Valued up to $1400): ...'
      },
      {
				channel: 'TD Ameritrade',
				title: 'Investing Basics: Stocks',
				topic: 'Basics of Investing',
				link: 'hE2NsJGpEq4',
				description: 'Stocks are one of the most common investments, and a great starting point to learn about investing. This video explains the basics of investing in the stock ...'
			}
    ];
    let allArticles = [
			{ title: 'How the 0.001% Invest', link: 'https://www.economist.com/leaders/2018/12/15/how-the-0001-invest?fsrc=scn/tw/te/bl/ed/howthe0001investinvestingandthesuperrich', image: image_list_2, topic: 'Venture Capital' },
			{ title: 'Rebuilding Public Investment', link: 'https://tribunemag.co.uk/2019/11/rebuilding-public-investment', topic: 'Impact Investing', image: image_list_3 }
		]

    // Dynamic Blog Data Loop
    let DataList = data.map((val, i) => {
       return (
          <div className="blog-item" key={i}>
             <div className="blog-block">
							<div className="blog-box">
								<div className="overflow-hidden">
									<div className="embed-responsive embed-responsive-4by3">
										<iframe title={val.channel} className="embed-responsive-item" src={`https://www.youtube.com/embed/${val.link}`}></iframe>
									</div>
									
								</div>
							</div>
						</div>
            <div className="blog-text">
							<h3>{val.title}</h3>
							<p>{`${val.description.split('').splice(0, 100).join('')}...`}</p>
							<h6>Source: {val.channel}</h6>
						</div>
          </div>
       );
    });
    let DataList2 = allArticles.map((val, i) => {
			return (
					<div className="blog-item" key={i}>
						<div className="blog-block">
							<div className="blog-box">
								<div className="overflow-hidden"><a href={val.link} target="_blank" rel="noopener noreferrer" ><img src={val.image} alt="blog" className="img-fluid" /></a></div>
							</div>
						</div>
						<div className="blog-text">
							<a href={val.link} target="_blank" rel="noopener noreferrer">
								<h3>{val.title}</h3>
								<p>Topic: {val.topic} </p>
							</a>
						</div>
					</div>
			)
		});

    return (
       <section id="blog" className="blog">
          <div className="about-decor">
             <div className="about-circle1"><img src="assets/images/team1.png" alt="" /></div>
             <div className="about-circle2"><img src="assets/images/main-banner1.png" alt="" /></div>
          </div>
          <div className="container">
             <div className="row">
                <div className="col-sm-12">
                   <h2 className="title"><span>Buzzworthy</span></h2>
                </div>
                <div className="col-sm-12">
                   <OwlCarousel
                      className="blog-carousel owl-carousel owl-theme"
                      loop={true}
                      margin={30}
                      nav={true}
                      dots={true}
                      responsive={options}
                      
                   >
                      {DataList}
                      {DataList2}
                   </OwlCarousel>
                </div>
             </div>
          </div>
       </section>
    );
  }
}

export default Featured