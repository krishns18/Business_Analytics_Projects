import React, { Component } from 'react';
import firebase from './firebase.js'
import banner_2 from '../assets/images/main-banner12.png';
import main_banner from '../assets/images/main-banner1.png';
import contact_owl from '../assets/images/contact-owl.png';

class Contact extends Component {
  state = {
    fullname: '',
    email: '',
    topic: '',
    message: ''
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('queries');
    const item = {
      name: this.state.fullname,
      email: this.state.email,
      topic: this.state.topic,
      message: this.state.message
    }
    itemsRef.push(item);
    this.setState({
      fullname: '',
      email:'',
      topic:'',
      message:''
    });
  }
  render() {
    return (
      <div className="page-margin">
        <section id="contact" className="price">
          <div className="contact-decor">
            <div className="contact-circle1"><img src={banner_2} alt="" /></div>
            <div className="contact-circle2"><img src={main_banner} alt="" /></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8 col-sm-12">
                <div className="contact-us">
                  <div className="w-100">
                    <h2 className="title"><span>contact </span>US</h2>
                    <h4>We are here to help. Let us know your questions.</h4>
                    <form onSubmit={this.handleSubmit} className="theme-form">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 md-fgrup-margin">
                            <input type="text" className="form-control" placeholder="your name" name="fullname" id="mce-fullname" onChange={this.handleChange} required="required" value={this.state.fullname} />
                          </div>
                          <div className="col-sm-12 col-md-6 md-fgrup-margin">
                            <input type="email" className="form-control" placeholder="your email" name="email" id="mce-email" onChange={this.handleChange} required="required" value={this.state.email} />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="subject" name="topic" id="mce-topic" onChange={this.handleChange} required="required" value={this.state.topic} />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="message" onChange={this.handleChange} placeholder="message" required="required" value={this.state.message}></textarea>
                      </div>
                      <div className="form-button">
                        <button className="btn btn-custom theme-color" id="mc-submit2">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-medium-none-lg">
                <div className="contact-right">
                  <img src={contact_owl} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact