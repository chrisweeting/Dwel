import React from 'react';
import FlashMessage from "react-flash-message";
import { NavLink, Redirect, Link } from 'react-router-dom';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.demoState = { email: 'chris', password: '123456' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    const modal = document.querySelector(".user-modal");
    const body = document.querySelector("body");
    modal.classList.remove("is-open");
    body.classList.remove("stop-scrolling");
  }

  componentDidMount() {
    this.props.clear();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    // this.closeModal();
  }

  handleClick(e) {
    this.setState(this.demoState);
    () => this.handleSubmit();
    this.closeModal();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    const errors = this.props.errors.map((error, i) => {
      return (<li key={`error-${i}`}>{error}</li>);
    });
    return (
      <ul className="form-errors">
        {errors}
      </ul>
    );
  }


  render() {
    const passwordPlaceholder = this.props.formType === 'Sign up' ? 'Create password' : 'Enter password';
    const buttonText = this.props.formType === 'Sign up' ? 'Submit' : 'Sign in';
    const demoUser = this.props.formType === 'Sign up' ? '' : <button onClick={() => this.handleClick()} >Demo Sign in</button>;
    return (
      <>
        <div className="user-form-modal">
          <h2>Welcome to Dwel</h2>
          <Link className="modal-close" onClick={this.closeModal} to="/" >x</Link>
          <section className="user-form-nav">
            <NavLink to="/signin" activeClassName="selected" >Sign in</NavLink>
            <NavLink to="/signup" activeClassName="selected" >New account</NavLink>
          </section>

          
          <form onSubmit={this.handleSubmit} className="user-form" >

            <label htmlFor="email-input"> Email
              <br />
              <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Enter email"/>
            </label>
            <br />
            <label htmlFor="password-input"> Password
              <br />
              <input type="password" value={this.state.password} onChange={this.update('password')} placeholder={passwordPlaceholder} />
            </label>
            <br />
            <button type="submit" >{buttonText}</button>
            {demoUser}

    
            {this.renderErrors()}
          </form>

        </div>
        <Link className="user-form-modal-screen" onClick={this.closeModal} to="/" ></Link>
      </>
    )
  }
}

export default SessionForm;

// to add: 
// modal styling
// password strength checklist