import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../util/modal_util';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    this.props.logout();
  }

  openModal() {
    const modal = document.querySelector(".user-modal");
    const body = document.querySelector("body");
    modal.classList.add("is-open");
    body.classList.add("stop-scrolling");
  }

  render() {
    const display = this.props.currentUser ? (
      <>
        <p>{this.props.currentUser.email}</p>
        <button onClick={this.handleClick} >Logout</button>
      </>
    ) : (
      <>
        {/* <Link className="test-button" to="/signup">Sign Up</Link> */}
        <Link className="test-button" to="/signin" onClick={this.openModal} >Sign In</Link>

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