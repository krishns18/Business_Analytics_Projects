import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideosBI extends Component {
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
				channel: 'TD Ameritrade',
				title: 'Investing Basics: Stocks',
				topic: 'Basics of Investing',
				link: 'hE2NsJGpEq4',
				description: 'Stocks are one of the most common investments, and a great starting point to learn about investing. This video explains the basics of investing in the stock ...'
			},
			{
				channel: 'Smart Investing Trends',
				title: 'Investing 101: Stocks, Bonds, 401K, Cash',
				topic: 'Basics of Investing',
				link: 'l4TzfPfLMB4',
				description: 'This brief tutorial will teach you investing 101 and the terminology you need to understand if you are investing as a beginner and want to plan for retirement. In this ...'
			},
			{
				channel: 'Project Life Mastery',
				title: 'Advice: Investing For Beginners',
				topic: 'Basics of Investing',
				link: 'covxjhXsCi8',
				description: 'Building an investment portfolio is one of the smartest ways to create long-term wealth. Investing for beginners can feel confusing, but when you know which ...'
			},
			{
				channel: 'Big Think',
				title: 'Finance and Investing in Under an Hour',
				topic: 'Basics of Investing',
				link: 'WEDIj9JBTC8',
				description: 'Everything You Need to Know About Finance and Investing in Under an Hour Watch the newest video from Big Think: https://bigth.ink/NewVideo Join Big Think ...'
			},
			{
				channel: 'Proactive Thinker',
				title: 'Investing In Stocks For Beginners',
				topic: 'Basics of Investing',
				link: 'Sbp_t4guM8g',
				description: 'If you enjoy our work and want to support us: https://bit.ly/2UTdAqL My premium Course - Unshakable Confidence: https://goo.gl/qyJFXg Videos you will (may) ...'
			},
			{
				channel: 'CA Rachana Phadke Ranade',
				title: 'Basics of Stock Market For Beginners',
				topic: 'Basics of Investing',
				link: 'Xn7KWR9EOGQ',
				description: 'You can get full Stock Market lectures from my websites https://www.rachanaranade.com ( For Android & iOS courses): https://rachanaranade.in/ (For Windows ...'
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
								<h2 className="title">Basics of Investing</h2>
							</div>
							<div className="col-md-6 col-sm-6 col-text-center">
								<nav aria-label="breadcrumb" className="blog-bradcrumb ">
									<ol className="breadcrumb bg-transparent mb-0">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active"><Link to="/learn">Learn</Link></li>
										<li className="breadcrumb-item ">Basics of Investing</li>
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
													<Link to="/fixed-income-investing">
														<i className="fa fa-angle-right" aria-hidden="true"></i>Fixed Income Investing
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/mutual-funds-videos">
														<i className="fa fa-angle-right" aria-hidden="true"></i>Mutual Funds
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

export default VideosBI