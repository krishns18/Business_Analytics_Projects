import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideosST extends Component {
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
				channel: 'Financial Education',
				title: 'Stock Market For Beginners 2020',
				topic: 'Stock Market Basics',
				link: '-eXAGjPPz4k',
				description: 'Stock market for beginners 2020 edition! This video should help out all stock market for beginners type folks who need to know the basics of stock market ...'
			},
			{
				channel: 'TED-Ed',
				title: 'How does the stock market work? - Oliver Elfenbaum',
				topic: 'Stock Market Basics',
				link: 'p7HKvqRI_Bo',
				description: 'Download a free audiobook version of "The Richest Man in Babylon" and support TED-Eds nonprofit mission: https://www.audible.com/ted-ed Check out our full ...'
			},
			{
				channel: 'Online Trading Academy',
				title: 'Stock Market Terms for Beginners',
				topic: 'Stock Market Basics',
				link: 'go75jhbHi3E',
				description: 'A review of basic stock market terms for beginners by Online Trading Academy. Are you looking to invest more in the markets and do not know where to start?'
			},
			{
				channel: 'TD Ameritrade',
				title: 'Investing Basics: Stocks',
				topic: 'Stock Market Basics',
				link: 'hE2NsJGpEq4',
				description: 'Stocks are one of the most common investments—and a great starting point to learn about investing. This video explains the basics of investing in the stock ...'
			},
			{
				channel: 'ClayTrader',
				title: 'Trading 101: What is the Stock Market?',
				topic: 'Stock Market Basics',
				link: 'ixF_wB2uvOs',
				description: 'Trading 101: What is the Stock Market? Come join me for a live session where I talk more about trading, the markets and all the money that can be made.'
			},
			{
				channel: "Nate O'Brien",
				title: 'Stock Market For Beginners 2020 | How To Invest (Step by Step)',
				topic: 'Stock Market Basics',
				link: 'dFAiChOmoGI',
				description: 'In this video, I will show you how to invest in the stock market as a beginner in 2020. Get 2 Free Stocks on WeBull when you deposit $100 (Valued up to $1400): ...'
			},
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
								<h2 className="title">All Videos</h2>
							</div>
							<div className="col-md-6 col-sm-6 col-text-center">
								<nav aria-label="breadcrumb" className="blog-bradcrumb ">
									<ol className="breadcrumb bg-transparent mb-0">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active"><Link to="/learn">Learn</Link></li>
										<li className="breadcrumb-item ">All Videos</li>
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
													<Link to="/mutual-funds-videos">
														<i className="fa fa-angle-right" aria-hidden="true"></i>Mutual Funds
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

export default VideosST