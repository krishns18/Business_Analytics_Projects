import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideosFI extends Component {
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
				channel: 'Fidelity Investments',
				title: 'Know about Fixed Income ETFs | Fidelity',
				topic: 'Fixed Income Investing',
				link: 'ZuJ4NZZ0Xvw',
				description: 'Find out more about exchange-traded funds with us at the https://www.fidelity.com/learning-cen...'
			},
			{
				channel: 'Vanguard',
				title: 'fixed income investment opportunities',
				topic: 'Fixed Income Investing',
				link: 'VuGtaG_BeEM',
				description: 'Managing risk in bond funds and ETFs Tim Buckley: Sara, before this crisis started, your fixed income team was conservatively positioned. You guys talk about ...'
			},
			{
				channel: 'Griffin Milks',
				title: 'Is Fixed Income (Bonds) Worth It?',
				topic: 'Fixed Income Investing',
				link: 'tUN9XkMB2BY',
				description: 'Ultimate Stock Market Portfolio with Automated Dividend Income Tracker: https://cointocapital.com/product/ultimate-personal-finance-spreadsheet/ I have spoken ...'
			},
			{
				channel: 'Ben Felix',
				title: 'Why Think Twice about High Yield Bonds',
				topic: 'Fixed Income Investing',
				link: 'CZp9ULWi3pI',
				description: 'In this episode of common sense investing I will tell you why you should think twice about owning high yield bonds. Alternative investments are a broad category, ...'
			},
			{
				channel: 'TommyBryson',
				title: 'Highest Bank CD Rates and Certificate of Deposit explained',
				topic: 'Fixed Income Investing',
				link: 'P16Xy6e15JM',
				description: 'So many different ways of investments and it always sums up to the same level of understanding, you earn more money from institution if your willing to give up ...'
			},
			{
				channel: 'Wander Wealthy by Tess Wicks',
				title: 'HOW TO BUILD A CD LADDER | Emergency Savings Fund',
				topic: 'Fixed Income Investing',
				link: 'AcaQOWwcqCU',
				description: 'Ever heard of a CD ladder? I had not until recently. Then I dove deep into this unique strategy to better optimize my savings and extra money, and I am digging it!'
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
								<h2 className="title">Fixed Income Investing</h2>
							</div>
							<div className="col-md-6 col-sm-6 col-text-center">
								<nav aria-label="breadcrumb" className="blog-bradcrumb ">
									<ol className="breadcrumb bg-transparent mb-0">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active"><Link to="/learn">Learn</Link></li>
										<li className="breadcrumb-item ">Fixed Income Investing</li>
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

export default VideosFI