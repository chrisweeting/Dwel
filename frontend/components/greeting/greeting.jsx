import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.logout();
  }

  
  
  render() {
    const display = this.props.currentUser ? (
      <>
        <p>{this.props.currentUser.email}</p>
        <button onClick={this.handleClick} >Logout</button>
      </>
    ) : (
      <>
        <Link className="test-button" to="/signup">Sign Up</Link>
        <Link className="test-button" to="/signin">Sign In</Link>
      </>
    );

    return (
      <nav className="header-menu">
        {display}
      </nav>
    )
  }
}

export default Greeting;