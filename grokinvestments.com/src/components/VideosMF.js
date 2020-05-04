import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideosMF extends Component {
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
		let allArticles = [
			{
				channel: 'The Dave Ramsey Show',
				title: 'What Should I Know When Buying Mutual Funds?',
				topic: 'Mutual Funds Tips',
				link: 'JUk9WCD-QtA',
				description: 'Get life-changing financial advice anytime, anywhere. Subscribe today: https://www.youtube.com/c/TheDaveRamseyShow?sub_confirmation=1 Learn to budget, ...'
			},
			{
				channel: 'Chink Positive',
				title: 'INVESTMENT TIPS: What is Mutual Fund | Mutual Fund Tips',
				topic: 'Mutual Funds Tips',
				link: '8bO62-MDR6s-QtA',
				description: 'Mr. Chinkee Tan, also known as Mr. Chink Positive, is a motivational speaker and wealth coach. Do not forget to SUBSCRIBE to my channel: ...'
			},
			{
				channel: 'B Wealthy',
				title: 'Mutual Fund Tips by Experts – SIP Vs Lumpsum Investment',
				topic: 'Mutual Funds Tips',
				link: 'W704irXHIbc',
				description: 'In this special series by Bwealthy, five different Financial Advisors with more than 15 years of professional experience have shared their knowledge about ...'
			},
			{
				channel: 'TD Ameritrade',
				title: 'Investing Basics: Mutual Funds',
				topic: 'Mutual Funds Tips',
				link: 'ngfKXvfzC74',
				description: 'Mutual funds can help you access a variety of investments and diversify your portfolio. In this video you will learn how mutual funds work and how to select a ...'
			},
			{
				channel: 'ETMONEY',
				title: 'Mutual Funds for Beginners | How to pick your first mutual fund | Investment Tips',
				topic: 'Mutual Funds Tips',
				link: 'dwyQ3pkaxH0',
				description: 'Mutual Funds for Beginners | How to pick your first mutual fund | Investment Tips Picking the right mutual fund for your first investment can get confusing.'
			},
			{
				channel: 'Graham Stephan',
				title: 'How To Become A Millionaire: Index Fund Investing For Beginners',
				topic: 'Mutual Funds Tips',
				link: 'fwe-PjrX23o',
				description: 'Index Fund Investing for beginners: This is one of the best investments that requires very little work, almost no skill, and has some of the best overall returns.'
			}
    ]
    
		let DataList = allArticles.map((val, i) => {
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

		return (
			<div className="page-margin">
				<div className="breadcrumb-bg">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-6 col-text-center d-align-center">
								<h2 className="title">Mutual Funds</h2>
							</div>
							<div className="col-md-6 col-sm-6 col-text-center">
								<nav aria-label="breadcrumb" className="blog-bradcrumb ">
									<ol className="breadcrumb bg-transparent mb-0">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active"><Link to="/learn">Learn</Link></li>
										<li className="breadcrumb-item ">Mutual Funds</li>
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
													<Link to="/all-videos">
														<i className="fa fa-angle-right" aria-hidden="true"></i>All
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/basics-of-investing">
														<i className="fa fa-angle-right" aria-hidden="true"></i>Basics of Investing
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/fixed-income-investing">
														<i className="fa fa-angle-right" aria-hidden="true"></i>Fixed Income Investing
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/stocks-videos">
														<i className="fa fa-angle-right" aria-hidden="true"></i>Stocks
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

export default VideosMF