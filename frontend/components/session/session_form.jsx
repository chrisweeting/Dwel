import React from 'react';
import FlashMessage from "react-flash-message";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.clear();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <>
        {this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}
      </>
    );
  }

  render() {
    const passwordPlaceholder = this.props.formType === 'Sign up' ? 'Create password' : 'Enter password';
    const buttonText = this.props.formType === 'Sign up' ? 'Submit' : 'Sign in';
    return (
      <>
        <form onSubmit={this.handleSubmit} >

          <label htmlFor="email-input"> Email
            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Enter email"  />
          </label>

          <label htmlFor="password-input"> Password
            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder={passwordPlaceholder} />
          </label>

          <button type="submit" >{buttonText}</button>
          
          {this.renderErrors()}
        </form>
      </>
    )
  }
}

export default SessionForm;

// to add: 
// modal styling
// password strength checklist