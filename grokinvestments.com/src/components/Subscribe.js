import React, { Component } from 'react';
import firebase from './firebase.js'
import email_img from '../assets/images/email.png';

class Subscribe extends Component {
  state = {
    fullname:'',
    email:''
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('subscriptions');
    const item = {
      name: this.state.fullname,
      email: this.state.email
    }
    itemsRef.push(item);
    this.setState({
      fullname: '',
      email:''
    });
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="footer-text">
                <img src={email_img} alt="email" />
                <h2 className="title text-center md-margin-top">subscribe to <span>newsletter</span></h2>
                <p> For latest Tutorials, Products &amp; Services</p>
                <form onSubmit={this.handleSubmit} className="footer-form needs-validation" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="enter your name" name="fullname" id="mce-fullname" onChange={this.handleChange} required="required" value={this.state.fullname}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="enter your email" name="email" id="mce-email" onChange={this.handleChange} required="required" value={this.state.email}/>
                  </div>
                  <div className="form-button">
                    <button className="btn btn-custom theme-color" id="mc-submit">Get Early Access</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Subscribe