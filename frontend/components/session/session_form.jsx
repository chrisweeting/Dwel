import React from 'react';
import FlashMessage from "react-flash-message";
import { NavLink } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.demoState = { email: 'chris', password: '123456' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    const modal = document.querySelector(".user-modal");
    modal.classList.remove("is-open");
  }

  componentDidMount() {
    this.props.clear();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleClick(e) {
    this.setState(this.demoState);
    () => this.handleSubmit();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul className="form-errors">
        {this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}
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
          <section className="user-form-nav">
            <NavLink to="/signin" activeClassName="selected" >Sign in</NavLink>
            <NavLink to="/signup" activeClassName="selected" >Sign up</NavLink>
          </section>

          
          <form onSubmit={this.handleSubmit} className="user-form" >

            <label htmlFor="email-input"> Email
              <br />
              <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Enter email"  />
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
        <div className="user-form-modal-screen" onClick={this.closeModal} ></div>
      </>
    )
  }
}

export default SessionForm;

// to add: 
// modal styling
// password strength checklist