import React from 'react';
import { withRouter } from 'react-router-dom';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '', 
      password: '',
      validated: false,
      emailErrors: false,
      passwordErrors: false,
      passwordCheck: {
        length: '',
        charMix: '',
        special: '',
        caseMix: '',
        complete: false 
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordChecklist = this.passwordChecklist.bind(this);
  }

  componentDidMount() {
    this.props.clear();
    const body = document.querySelector("body");
    body.classList.add("stop-scrolling");
  }

  componentWillUnmount() {
    const body = document.querySelector("body");
    body.classList.remove("stop-scrolling");
  }


  handleSubmit(e) {

    if (this.validate()) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.action(user).then(
        () => this.props.closeModal()
      );
    }

  }

  handleClick(e) {
    this.setState({
      email: 'chris@email.com',
      password: 'Uppercase1!'
    }, 
      () => this.handleSubmit(e)
    );
  }

  update(field) {
    if (this.props.formType === 'New account') {
      
      if (field === "password") {
  
        return (e) => this.setState({
          [field]: e.currentTarget.value,
          validated: this.validateEmail() && this.checkPassword(e.currentTarget.value).complete,
          passwordCheck: this.checkPassword(e.currentTarget.value)
        });
      } else if (field === "email") {
        
        return (e) => this.setState({ 
          [field]: e.currentTarget.value,
          validated: this.validateEmail(e.currentTarget.value) && this.checkPassword().complete
        });
  
      }
    } else {

      return (e) => this.setState({
        [field]: e.currentTarget.value,
      });
      
    }
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

  passwordChecklist() {
   
    return (
      <div className="password-checklist">
        <p className={this.state.passwordCheck.length}>At least 8 characters</p>
        <p className={this.state.passwordCheck.charMix}>Mix of letters and numbers</p>
        <p className={this.state.passwordCheck.special}>At least 1 special character</p>
        <p className={this.state.passwordCheck.caseMix}>At least 1 uppercase letter</p>
      </div>
    );
  }

  checkPassword(password = this.state.password) {
    const passwordCheck = {
      length: '',
      charMix: '',
      special: '',
      caseMix: '',
      complete: false
    }
    if (password.length > 0) {
      passwordCheck["length"] = (password.length > 7) ? "complete" : "not-complete";
      passwordCheck["charMix"] = this.checkCharMix(password) ? "complete" : "not-complete";
      passwordCheck["special"] = this.checkSpecial(password) ? "complete" : "not-complete";
      passwordCheck["caseMix"] = this.checkCaseMix(password) ? "complete" : "not-complete";
    }

    passwordCheck["complete"] = this.allComplete(passwordCheck);

    return passwordCheck;
  }

  checkCharMix(password) {
    const nums = "0123456789";
    const alph = "abcdefghijklmnopqrstuvwxyz"
    let num = false;
    let letter = false;

    password.split('').forEach(char => {
      if (nums.includes(char)) num = true;
      if (alph.includes(char.toLowerCase())) letter = true; 
    });

    return num && letter;
  }

  checkSpecial(password) {
    const chars = "!@#$%^&*_-+=?<>~`|/.,[]{}"
    let res = false;

    password.split('').forEach(char => {
      if (chars.includes(char)) res = true;
    });

    return res;
  }

  checkCaseMix(password) {
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = false;

    password.split('').forEach(char => {
      if (alph.includes(char)) res = true;
    });

    return res;

  }

  allComplete(obj) {
    const values = Object.values(obj);
    let res = true;

    values.forEach(value => {
      if (value !== "complete" && value !== false) res = false;
    });

    return res;
  }

  submitButton() {
    switch (this.props.formType) {
      case 'New account':
        if (this.state.validated) {
          return <button onClick={() => this.handleSubmit()} className="user-form-button">Sign in</button>
        } else {
          return <button className="user-form-button-dummy">Sign in</button>
        }
      case 'Sign in':
        return <button onClick={() => this.handleSubmit()} className="user-form-button">Submit</button>
    }
  }

  validateEmail(email = this.state.email) {
    const atI = email.indexOf('@');
    const domain = email.slice(atI);
    const dot = domain.indexOf('.');

    if (atI > 0 && dot > 0 && dot !== domain.length -1) {
      return true
    } 

    return false
  }

  emailErrors() {
    if (this.state.emailErrors) {
      return <p className="line-form-errors">Enter a valid email address</p>
    } else {
      return null
    }
  }

  passwordErrors() {
    if (this.state.passwordErrors) {
      return <p className="line-form-errors">Please enter a password</p>
    } else {
      return null
    }
  }

  validate() {
    let emailErrors = false;
    let passwordErrors = false;
    let validate = true;

    if (!this.validateEmail(this.state.email)) {
      emailErrors = true;
      validate = false;
    }
    if (this.state.password.length === 0) {
      passwordErrors = true;
      validate = false;
    }

    this.setState({ 
      emailErrors: emailErrors,
      passwordErrors: passwordErrors
    })

    return validate;
  }


  render() {
    const passwordPlaceholder = this.props.formType === 'New account' ? 'Create password' : 'Enter password';
    const emailInput = this.state.emailErrors ? "user-form-input error" : "user-form-input";
    const passwordInput = this.state.passwordErrors ? "user-form-input error" : "user-form-input"; 
    const emailErrors = this.props.formType === 'New account' ? null : this.emailErrors();
    const passwordErrors = this.props.formType === 'New account' ? null : this.passwordErrors();
    const passwordChecklist = this.props.formType === 'New account' ? this.passwordChecklist() : null;
    const submitButton = this.submitButton();
    const demoUser = this.props.formType === 'New account' ? '' : <button onClick={() => this.handleClick()} className="user-form-button" >Demo Sign in</button>;
    const navButton_1 = this.props.formType === 'New account' ? this.props.otherForm : <button className="lit">{this.props.formType}</button>;
    const navButton_2 = this.props.formType === 'New account' ? <button className="lit">{this.props.formType}</button> :  this.props.otherForm ;

    return (
      <>
        <div className="user-form-modal">
          <h2>Welcome to Dwel</h2>
          <div className="modal-close" onClick={() => this.props.closeModal()} >x</div>
          <section className="user-form-nav">
            {navButton_1}
            {navButton_2}
          </section>

          
          <form className="user-form" onSubmit={(e) => e.preventDefault()} >

            <label htmlFor="email-input" className="user-form-label"> Email
             
              <input className={emailInput} type="text" value={this.state.email} onChange={this.update('email')} placeholder="Enter email"/>
              {emailErrors}
            </label>
          
            <label htmlFor="password-input" className="user-form-label"> Password
             
              <input className={passwordInput} type="password" value={this.state.password} onChange={this.update('password')} placeholder={passwordPlaceholder} />
              {passwordErrors}
              {passwordChecklist}
            </label>
           
            {submitButton}
            {demoUser}

    
            {this.renderErrors()}
          </form>

        </div>
      </>
    )
  }
}

export default withRouter(SessionForm);

