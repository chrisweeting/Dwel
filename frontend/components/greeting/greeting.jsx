import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../util/modal_util';
import UserDropdown from '../session/user_dropdown';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
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

  toggleDropdown() {
    const dropdown = document.querySelector(".user-dropdown");
    dropdown.classList.toggle("drop-open");
  }

  render() {
    const display = this.props.currentUser ? (
      <>
        <p>{this.props.currentUser.email}</p>
  
        <figure className="user-icon" onClick={this.toggleDropdown} ></figure>
        <UserDropdown currentUser={this.props.currentUser} handleClick={this.handleClick} toggle={this.toggleDropdown}  />
      </>
    ) : (
      <>
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