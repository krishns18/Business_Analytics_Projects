import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image_list_1 from '../assets/images/blog/image-list-1.jpg';
import image_list_2 from '../assets/images/blog/image-list-2.jpg';
import image_list_4 from '../assets/images/blog/image-list-4.jpg';
import image_list_6 from '../assets/images/blog/image-list-6.jpg';

class Learn extends Component {
	render() {
		let allVideos = [
			{
				channel: 'TD Ameritrade',
				title: 'Investing Basics: Stocks',
				topic: 'Basics of Investing',
				link: 'hE2NsJGpEq4',
				description: 'Stocks are one of the most common investments, and a great starting point to learn about investing. This video explains the basics of investing in the stock ...'
			},
			{
				channel: 'Griffin Milks',
				title: 'Is Fixed Income (Bonds) Worth It?',
				topic: 'Fixed Income Investing',
				link: 'tUN9XkMB2BY',
				description: 'Ultimate Stock Market Portfolio with Automated Dividend Income Tracker: https://cointocapital.com/product/ultimate-personal-finance-spreadsheet/ I have spoken ...'
			},
			{
				channel: 'The Dave Ramsey Show',
				title: 'What Should I Know When Buying Mutual Funds?',
				topic: 'Mutual Funds Tips',
				link: 'JUk9WCD-QtA',
				description: 'Get life-changing financial advice anytime, anywhere. Subscribe today: https://www.youtube.com/c/TheDaveRamseyShow?sub_confirmation=1 Learn to budget, ...'
			},
			{
				channel: 'TD Ameritrade',
				title: 'Investing Basics: Stocks',
				topic: 'Stock Market Basics',
				link: 'hE2NsJGpEq4',
				description: 'Stocks are one of the most common investments—and a great starting point to learn about investing. This video explains the basics of investing in the stock ...'
			}

		]
		let DataList = allVideos.map((val, i) => {
			return (
				<div className="col-lg-6 col-md-12" key={i}>
					<div className="blog-item">
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
				</div>
			)

		});
		let allArticles = [
			{ title: 'Pynk – Social Investing', link: 'https://pynk.io/', topic: 'Impact Investing', image: image_list_1 },
			{ title: 'Inward Investment at high levels', link: 'https://www.bbc.co.uk/news/uk-scotland-scotland-business-27747527', topic: 'National Investment and Infrastructure Fund', image: image_list_4 },
			{ title: 'How the 0.001% Invest', link: 'https://www.economist.com/leaders/2018/12/15/how-the-0001-invest?fsrc=scn/tw/te/bl/ed/howthe0001investinvestingandthesuperrich', image: image_list_2, topic: 'Venture Capital' },
			{ title: 'The Laws of Investing', link: 'https://www.collaborativefund.com/blog/the-laws-of-investing/', topic: 'Financial Risk', image: image_list_6 },
		]
		let DataList2 = allArticles.map((val, i) => {
			return (
				<div className="col-lg-6 col-md-12" key={i}>
					<div className="blog-item">
						<div className="blog-block">
							<div className="blog-box">
								<div className="overflow-hidden"><a href={val.link} target="_blank" rel="noopener noreferrer"><img src={val.image} alt="blog" className="img-fluid" /></a></div>
							</div>
						</div>
						<div className="blog-text">
							<a href={val.link} target="_blank" rel="noopener noreferrer">
								<h3>{val.title}</h3>
								<p>Topic: {val.topic} </p>
							</a>
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
								<h2 className="title">All You Can <span>Learn</span></h2>
							</div>
							<div className="col-md-6 col-sm-6 col-text-center">
								<nav aria-label="breadcrumb" className="blog-bradcrumb ">
									<ol className="breadcrumb bg-transparent mb-0">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active"><Link to="/learn">Learn</Link></li>
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
									{DataList2}
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

export default Learn