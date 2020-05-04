import React, { Component } from 'react';
import firebase from './firebase.js'
import amazon from '../assets/images/amazon.png';
import { Link } from 'react-router-dom';
import thank_you from '../assets/images/thank-you.png';

class Survey extends Component {

  state = {
    showForm: true,
    showThanks: false,
    email: '',
    website_comment: '',
    gender: '',
    age_group: '',
    ethnicity: '',
    immigrated: '',
    employment_status: '',
    income: '',
    new_to_investing: '',
    advising_sources_1: '',
    advising_sources_2: '',
    advising_sources_3: '',
    advising_sources_4: '',
    advising_sources_5: '',
    advising_sources_6: '',
    investment_account: '',
    withdraw_investment: '',
    investment_preference: '',
    website_feature: '',
    apps_comment: '',
    recommend_us: ''
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('survey');
    const item = {
      email: this.state.email,
      website_comment: this.state.website_comment,
      gender: this.state.gender,
      age_group: this.state.age_group,
      ethnicity: this.state.ethnicity,
      immigrated: this.state.immigrated,
      employment_status: this.state.employment_status,
      income: this.state.income,
      new_to_investing: this.state.new_to_investing,
      advising_sources_1: this.state.advising_sources_1,
      advising_sources_2: this.state.advising_sources_2,
      advising_sources_3: this.state.advising_sources_3,
      advising_sources_4: this.state.advising_sources_4,
      advising_sources_5: this.state.advising_sources_5,
      advising_sources_6: this.state.advising_sources_6,
      investment_account: this.state.investment_account,
      withdraw_investment: this.state.withdraw_investment,
      investment_preference: this.state.investment_preference,
      website_feature: this.state.website_feature,
      apps_comment: this.state.apps_comment,
      recommend_us: this.state.recommend_us
    }
    itemsRef.push(item);
    this.setState({
      email: '',
      website_comment: '',
      gender: '',
      age_group: '',
      ethnicity: '',
      immigrated: '',
      employment_status: '',
      income: '',
      new_to_investing: '',
      advising_sources_1: '',
      advising_sources_2: '',
      advising_sources_3: '',
      advising_sources_4: '',
      advising_sources_5: '',
      advising_sources_6: '',
      investment_account: '',
      withdraw_investment: '',
      investment_preference: '',
      website_feature: '',
      apps_comment: '',
      recommend_us: '',
      showForm: false,
      showThanks:true
    });
  }

  render() {
    return (
      <div className="page-margin">
        {this.state.showForm && (
          <section id="contact" className="contact">
            <div className="contact-decor">
              <div className="contact-circle1"><img src="assets/images/main-banner12.png" alt="" /></div>
              <div className="contact-circle2"><img src="assets/images/main-banner1.png" alt="" /></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8 col-sm-12">
                  <div className="contact-us">
                    <div className="w-100">
                      <h2 className="title"><span>Feedback</span> Survey</h2>
                      <p></p>
                      <form className="theme-form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="mce-email"><b>Please enter your email for a chance to win a $50 Amazon Gift Card</b></label>
                          <input type="email" className="form-control" placeholder="enter your email" name="email" id="mce-email" onChange={this.handleChange} value={this.state.email} />
                          <small className="text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        {/* Q1 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q1. What is your gender?</b></label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" onChange={this.handleChange} required="required" />
                            <label className="form-check-label">Male</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={this.handleChange} />
                            <label className="form-check-label" >Female</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="not_known" onChange={this.handleChange} />
                            <label className="form-check-label">Decline to answer</label>
                          </div>
                        </div>
                        {/* Q2 */}
                        <div className="form-group">
                          <label htmlFor="age_group-radio"><b>Q2. What age group do you belong to?</b></label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="age_group" id="age_group_radio_1" value="under_18" onChange={this.handleChange} required="required" />
                            <label className="form-check-label">Under 18</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="age_group" id="age_group_radio_2" value="18_24" onChange={this.handleChange} />
                            <label className="form-check-label" > 18-24</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="age_group" id="age_group_radio_3" value="24_34" onChange={this.handleChange} />
                            <label className="form-check-label" > 25-34</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="age_group" id="age_group_radio_4" value="35_44" onChange={this.handleChange} />
                            <label className="form-check-label" > 35-44</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="age_group" id="age_group_radio_5" value="45_55" onChange={this.handleChange} />
                            <label className="form-check-label" > 45-55</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="age_group" id="age_group_radio_6" value="55_64" onChange={this.handleChange} />
                            <label className="form-check-label" > 55-64</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="age_group" id="age_group_radio_7" value="65_above" onChange={this.handleChange} />
                            <label className="form-check-label" > 65+</label>
                          </div>
                        </div>
                        {/* Q3 */}
                        <div className="form-group">
                          <label><b>Q3. What is your ethnicity?</b></label>
                          <br />
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="ethnicity" id="ethnicity_1" value="native_american" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >American Indian or Alaskan Native</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="ethnicity" id="ethnicity_2" value="asian" onChange={this.handleChange} />
                            <label className="form-check-label" >Asian</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="ethnicity" id="ethnicity_3" value="african_american" onChange={this.handleChange} />
                            <label className="form-check-label" >Black or African American</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="ethnicity" id="ethnicity_4" value="hispanic_latino" onChange={this.handleChange} />
                            <label className="form-check-label" >Hispanic or Latino</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="ethnicity" id="ethnicity_5" value="hawaiian_pacific_islander" onChange={this.handleChange} />
                            <label className="form-check-label" >Native Hawaiian or Pacific Islander</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="ethnicity" id="ethnicity_6" value="white" onChange={this.handleChange} />
                            <label className="form-check-label" >White</label>
                          </div>
                        </div>
                        {/* Q4 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q4. Did you or your parents immigrate to the United States?</b></label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="immigrated" id="immigrated_1" value="yes" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >Yes</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="immigrated" id="immigrated_2" value="no" onChange={this.handleChange} />
                            <label className="form-check-label" >No</label>
                          </div>
                        </div>
                        {/* Q5 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q5. Which statement best describes your current employment status?</b></label>
                          <br />
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="employment_status" id="employment_status_1" value="employed_full_time" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >Employed, Full Time</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="employment_status" id="employment_status_2" value="employed_part_time" onChange={this.handleChange} />
                            <label className="form-check-label" >Employed, Part Time</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="employment_status" id="employment_status_3" value="self_employed" onChange={this.handleChange} />
                            <label className="form-check-label" >Self Employed</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="employment_status" id="employment_status_4" value="unemployed" onChange={this.handleChange} />
                            <label className="form-check-label" >Unemployed</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="employment_status" id="employment_status_5" value="student" onChange={this.handleChange} />
                            <label className="form-check-label" >Student</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="employment_status" id="employment_status_6" value="not_known" onChange={this.handleChange} />
                            <label className="form-check-label" >Prefer not to answer</label>
                          </div>
                        </div>
                        {/* Q6 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q6. What is your combined household monthly income (before taxes)?</b></label>
                          <br />
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="income" id="income_1" value="less_than_10" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >Less than $10k</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="income" id="income_2" value="10_24" onChange={this.handleChange} />
                            <label className="form-check-label" >$10k to $24k</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="income" id="income_3" value="24_50" onChange={this.handleChange} />
                            <label className="form-check-label" >$24K to $50k</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="income" id="income_4" value="50_75" onChange={this.handleChange} />
                            <label className="form-check-label" >$50k to $75k</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="income" id="income_5" value="75_100" onChange={this.handleChange} />
                            <label className="form-check-label" >$75k to $100k</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="income" id="income_6" value="100_150" onChange={this.handleChange} />
                            <label className="form-check-label" >$100k to $150k</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="income" id="income_7" value="150_plus" onChange={this.handleChange} />
                            <label className="form-check-label" >More than $150k</label>
                          </div>
                        </div>
                        {/* Q7 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q7. Are you new to investing?</b></label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="new_to_investing" id="new_to_investing_1" value="yes" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >Yes</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="new_to_investing" id="new_to_investing_2" value="no" onChange={this.handleChange} />
                            <label className="form-check-label" >No</label>
                          </div>
                        </div>
                        {/* Q8 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q8. Where do you look for financial advising?</b></label>
                          <br />
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="advising_sources_1" id="advising_sources_1" value="news" onChange={this.handleChange} />
                            <label className="form-check-label">Financial News</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="advising_sources_2" id="advising_sources_2" value="financial_advisors" onChange={this.handleChange} />
                            <label className="form-check-label" >Financial Advisors</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="advising_sources_3" id="advising_sources_3" value="youtube" onChange={this.handleChange} />
                            <label className="form-check-label" >YouTube</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="advising_sources_4" id="advising_sources_4" value="social_media" onChange={this.handleChange} />
                            <label className="form-check-label" >Social Media (Facebook, Instagram)</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="advising_sources_5" id="advising_sources_5" value="blogs" onChange={this.handleChange} />
                            <label className="form-check-label" >Investment Blogs</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="advising_sources_6" id="advising_sources_6" value="family" onChange={this.handleChange} />
                            <label className="form-check-label" >Friends and Family</label>
                          </div>
                        </div>
                        {/* Q9 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q9. Do you currently own any investment account(s)?</b></label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="investment_account" id="investment_account_1" value="yes" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >Yes</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="investment_account" id="investment_account_2" value="no" onChange={this.handleChange} />
                            <label className="form-check-label" >No</label>
                          </div>
                        </div>
                        {/* Q10 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q10. I plan to begin withdrawing money from my investments in?</b></label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withdraw_investment" id="withdraw_investment_1" value="less_than_3" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >Less than 3 years</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withdraw_investment" id="withdraw_investment_2" value="3_5" onChange={this.handleChange} />
                            <label className="form-check-label" >3 to 5 years</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withdraw_investment" id="withdraw_investment_3" value="6_10" onChange={this.handleChange} />
                            <label className="form-check-label" >6 to 10 years</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="withdraw_investment" id="withdraw_investment_4" value="more_than_10" onChange={this.handleChange} />
                            <label className="form-check-label" >11 years or more</label>
                          </div>
                        </div>
                        {/* Q11 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q11. Which of the following would you prefer?</b></label>
                          <br />
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="investment_preference" id="investment_preference_1" value="low_risk" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >Potential low return with low risk</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="investment_preference" id="investment_preference_2" value="moderate_risk" onChange={this.handleChange} />
                            <label className="form-check-label" >Potential moderate return with moderate risk</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="investment_preference" id="investment_preference_3" value="high_risk" onChange={this.handleChange} />
                            <label className="form-check-label" >Potential high return with high risk</label>
                          </div>
                        </div>
                        {/* Q12 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q12. Which feature of our website did you like the most?</b></label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="website_feature" id="website_feature_1" value="learn" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >Tutorials</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="website_feature" id="website_feature_2" value="chatbot" onChange={this.handleChange} />
                            <label className="form-check-label" >Chatbot</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="website_feature" id="website_feature_3" value="quiz" onChange={this.handleChange} />
                            <label className="form-check-label" >Quiz</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="website_feature" id="website_feature_4" value="layout" onChange={this.handleChange} />
                            <label className="form-check-label" >Website Interface</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="website_feature" id="website_feature_5" value="all" onChange={this.handleChange} />
                            <label className="form-check-label" >All of them</label>
                          </div>
                        </div>
                        {/* Q13 */}
                        <div className="form-group">
                          <label htmlFor="text-area-q-12"><b>Q13. Which investment, budgeting applications (if any) do you use?</b></label>
                          <textarea className="form-control" id="text-area-q-13" rows="2" name="apps_comment" placeholder="investment budgeting applications" required="required" onChange={this.handleChange} value={this.state.apps_comment}></textarea>
                        </div>
                        {/* Q14*/}
                        <div className="form-group">
                          <label htmlFor="text-area-q-12"><b>Q14. If you would like to share any additional comments about your most recent interaction with our company's website, please enter them below.</b></label>
                          <textarea className="form-control" id="text-area-q-14" rows="4" name="website_comment" placeholder="message" required="required" onChange={this.handleChange} value={this.state.website_comment}></textarea>
                        </div>
                        {/* Q15 */}
                        <div className="form-group">
                          <label htmlFor="gender-radio"><b>Q15. On a scale from 0-10, based on your interactions with our website, how likely are you to recommend us to a friend or a colleague?</b></label>
                          <br />
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_1" value="1" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >1</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_2" value="2" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >2</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_3" value="3" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >3</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_4" value="4" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >4</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_5" value="5" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >5</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_6" value="6" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >6</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_7" value="7" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >7</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_8" value="8" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >8</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_9" value="9" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >9</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="recommend_us" id="recommend_us_10" value="10" onChange={this.handleChange} required="required" />
                            <label className="form-check-label" >10</label>
                          </div>
                        </div>
                        <div className="form-button">
                          <button className="btn btn-custom theme-color" id="mc-submit">Submit Survey</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-medium-none-lg">
                  <div className="contact-right">
                    <img src={amazon} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {this.state.showThanks && (
          <div className="full-page ">
            <div className="thanks-bg">
              <div className="container">
                <div className="col-md-12">
                  <div className="thanks-section">
                    <div>
                      <img src={thank_you} className="img-fluid downlod-img" alt="" />
                      <div className="col-lg-8 offset-lg-2">
                        <h2>Thank You</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*copy-right-section*/}
            <footer className="bg-thanks">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="copyright-section">
                      <p>2019-20 Copyright &copy; Grok Investments</p>
                      <div className="mt-3 text-center">
                        <Link to="/" className="btn btn-custom theme-color theme-color pt-2 pb-2">BACK TO HOME PAGE</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        )}

      </div>
    )
  }
}

export default Survey