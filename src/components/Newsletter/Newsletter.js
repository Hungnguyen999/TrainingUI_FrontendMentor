import React, { Component, isValidElement } from 'react';
import './Newsletter.scss';

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      isValidEmail: false,
      isOpen: false,
    }
  }
  handleChange = (e) => {
    const { value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.setState({
      emailInput: value,
      isValidEmail: emailRegex.test(value),
    })

    console.log("caccc" + this.isValidEmail)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidEmail) {
      this.setState({ isOpen: true });
      console.log("1" + this.isOpen)
    }
  }

  handleOnClose = (e) => {
    console.log("2")
    this.setState({ isOpen: false });
  }

  render() {
    const { emailInput, isValidEmail } = this.state;
    const Overlay = ({ isOpen, onClose }) => {
      return (
        <div className={isOpen ? 'newsletter-overlay open' : 'newsletter-overlay'}>
          <div className='newsletter-overlay__content'>
            <div className="overlay-header">
              <svg className='icon' width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#1C274C" />
              </svg>
              <h1 className='text-title'>Thank You for Subscribing!</h1>
            </div>
            <div className="overlay-body">
              <p> A confirmation email has been sent to <strong>hungreoa7@gmail.com </strong>. Please open it
                and click the button inside to confirm
              </p>
            </div>
            <button className='close-btn' onClick={onClose}>Dismiss message</button>
          </div>
        </div>
      )
    }

    return (
      <>
        <div className="newsletter-component">
          <div className="newsletter-component__form">
            <h1 className="text-title">Stay updated!</h1>
            <p className="text-intro">Join 60 000+ Product manager receiving monthly updates on:</p>
            <ul className="list-benefit">
              <li className="list-benefit__item">
                <svg className='icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#1C274C" />
                </svg>
                <span className="text-desc">Product discover and builing what ever</span>
              </li>
              <li className="list-benefit__item">
                <svg className='icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#1C274C" />
                </svg>
                <span className="text-desc">Measuring to ensure updates are a success</span>
              </li>
              <li className="list-benefit__item">
                <svg className='icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#1C274C" />
                </svg>
                <span className="text-desc"> Add much more!</span>
              </li>
            </ul>
            <form id="email-update-form" className="form-email" name="Email address">
              <div className="text">
                <label className="text__label">Email address</label>
                {!isValidEmail && emailInput.length > 0 && (
                  <label class="text__message">Password is a required field.</label>
                )}
              </div>
              <input type="email" placeholder="email@companyname.com" className="form-email__input" value={emailInput} onChange={this.handleChange} />
              <button type="button" onClick={this.handleSubmit} className="form-email__button">Subscribe to monthly newsletter!</button>
            </form>
          </div>
          <div className="newsletter-component__image">
            <img className="image" src="https://www.copper.com/_next/image?url=https%3A%2F%2Fd2ydtwisqcxv72.cloudfront.net%2F_1200x600_crop_center-center_82_line%2F15039%2F190830_EmailNewsletterSignups.jpg&w=1200&q=75" />
          </div>
        </div>
        <Overlay isOpen={this.state.isOpen} onClose={this.handleOnClose} />
      </>

    )
  }
}
export default Newsletter;