import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LearnVideos extends Component {
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
		let allVideos = [
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
			},
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
			},
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
			},
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

export default LearnVideos