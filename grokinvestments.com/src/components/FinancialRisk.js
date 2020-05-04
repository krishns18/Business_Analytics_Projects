import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "video-react/dist/video-react.css";
import image_list_2 from '../assets/images/blog/image-list-2.jpg';
import image_list_3 from '../assets/images/blog/image-list-3.jpg';
import image_list_6 from '../assets/images/blog/image-list-6.jpg';

class FinancialRisk extends Component {

	render() {
		let allArticles = [
			{ title: 'The Laws of Investing', link:'https://www.collaborativefund.com/blog/the-laws-of-investing/', topic: 'Financial Risk', image: image_list_6},
			{ title: 'Webcasts: Investment Philosophies', link: 'http://people.stern.nyu.edu/adamodar/New_Home_Page/webcastinvphil.htm', topic:'Financial Risk', image: image_list_2},
			{ title: 'Pynk – Social Investing', link: 'https://pynk.io/', topic: 'Financial Risk', image:image_list_3},
		]
		let DataList = allArticles.map((val, i) => {
			return (
				<div className="col-lg-6 col-md-12" key={i}>
					<div className="blog-item">
						<div className="blog-block">
							<div className="blog-box">
								<div className="overflow-hidden"><a href={val.link} target="_blank" ><img src={val.image} alt="blog" className="img-fluid" /></a></div>
							</div>
						</div>
						<div className="blog-text">
							<a href={val.link} target="_blank">
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
								<h2 className="title">Financial Risk</h2>
							</div>
							<div className="col-md-6 col-sm-6 col-text-center">
								<nav aria-label="breadcrumb" className="blog-bradcrumb ">
									<ol className="breadcrumb bg-transparent mb-0">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active"><Link to="/learn">Learn</Link></li>
										<li className="breadcrumb-item ">Financial Risk</li>
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
													<Link to="/all-articles">
														<i className="fa fa-angle-right" aria-hidden="true"></i> All Articles
			                    </Link>
												</li>
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
												
											</ul>
										</div>
									</div>
									<div className="sidebar-space">
										<h4 className="blog-title">Popular Tag</h4>
										<div className="blog-divider"></div>
										<div className="tags marg-20">
											<a href={null}><span className="badge badge-theme">Investing</span></a>
											<a href={null}><span className="badge badge-theme">Financial Independence</span></a>
											<a href={null}><span className="badge badge-theme">Learn</span></a>
											<a href={null}><span className="badge badge-theme">Risk</span></a>
											<a href={null}><span className="badge badge-theme">Venture Capital</span></a>
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

export default FinancialRisk