import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "video-react/dist/video-react.css";
import image_list_1 from '../assets/images/blog/image-list-1.jpg';
import image_list_2 from '../assets/images/blog/image-list-2.jpg';
import image_list_3 from '../assets/images/blog/image-list-3.jpg';
import image_list_4 from '../assets/images/blog/image-list-4.jpg';
import image_list_5 from '../assets/images/blog/image-list-5.jpg';
import image_list_6 from '../assets/images/blog/image-list-6.jpg';

class LearnArticles extends Component {

	render() {
		let allArticles = [
			{ title: 'Pynk – Social Investing', link: 'https://pynk.io/', topic: 'Impact Investing', image: image_list_1 },
			{ title: 'The merits of bottoms up investing', link: 'https://venturedesktop.substack.com/p/the-merits-of-bottoms-up-investing', topic: 'Impact Investing', image: image_list_2 },
			{ title: 'Rebuilding Public Investment', link: 'https://tribunemag.co.uk/2019/11/rebuilding-public-investment', topic: 'Impact Investing', image: image_list_3 },
			{ title: 'Inward Investment at high levels', link: 'https://www.bbc.co.uk/news/uk-scotland-scotland-business-27747527', topic: 'National Investment and Infrastructure Fund', image: image_list_4 },
			{ title: 'Return on Investment', link: 'https://www.investopedia.com/terms/r/returnoninvestment.asp', topic: 'National Investment and Infrastructure Fund', image: image_list_5 },
			{ title: 'Invest Liverpool', link: 'https://investliverpool.com/liverpool/liverpool-at-mipim/', image: image_list_6, topic: 'National Investment and Infrastructure Fund' },
			{ title: 'How the 0.001% Invest', link: 'https://www.economist.com/leaders/2018/12/15/how-the-0001-invest?fsrc=scn/tw/te/bl/ed/howthe0001investinvestingandthesuperrich', image: image_list_2, topic: 'Venture Capital' },
			{ title: 'The merits of bottoms up investing', link: 'https://venturedesktop.substack.com/p/the-merits-of-bottoms-up-investing', topic: 'Venture Capital', image: image_list_3 },
			{ title: 'Social Subsidy of Angel Investing', link: 'https://alexdanco.com/2019/11/27/the-social-subsidy-of-angel-investing/', topic: 'Venture Capital', image: image_list_4 },
			{ title: 'The Laws of Investing', link: 'https://www.collaborativefund.com/blog/the-laws-of-investing/', topic: 'Financial Risk', image: image_list_6 },
			{ title: 'Webcasts: Investment Philosophies', link: 'http://people.stern.nyu.edu/adamodar/New_Home_Page/webcastinvphil.htm', topic: 'Financial Risk', image: image_list_2 },
			{ title: 'Pynk – Social Investing', link: 'https://pynk.io/', topic: 'Financial Risk', image: image_list_3 },
		]
		let DataList = allArticles.map((val, i) => {
			return (
				<div className="col-lg-6 col-md-12" key={i}>
					<div className="blog-item">
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
				</div>
			)

		});

		return (
			<div className="page-margin">
				<div className="breadcrumb-bg">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-6 col-text-center d-align-center">
								<h2 className="title">All Articles</h2>
							</div>
							<div className="col-md-6 col-sm-6 col-text-center">
								<nav aria-label="breadcrumb" className="blog-bradcrumb ">
									<ol className="breadcrumb bg-transparent mb-0">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active"><Link to="/learn">Learn</Link></li>
										<li className="breadcrumb-item ">All Articles</li>
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
													<Link to="/impact-investing">
														<i className="fa fa-angle-right" aria-hidden="true"></i>Impact Investing
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/infrastructure-fund">
														<i className="fa fa-angle-right" aria-hidden="true"></i>Investment and Infra Fund
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/venture-capital">
														<i className="fa fa-angle-right" aria-hidden="true"></i> Venture Capital
			                    </Link>
												</li>
												<li className="marg-15">
													<Link to="/financial-risk">
														<i className="fa fa-angle-right" aria-hidden="true"></i> Financial Risk
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

export default LearnArticles