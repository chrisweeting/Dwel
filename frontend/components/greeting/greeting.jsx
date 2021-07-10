import React from 'react';
import { withRouter } from 'react-router-dom';
import UserDropdown from '../session/user_dropdown';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  handleClick(e) {
    if (e.currentTarget.id === "logout") {
      this.props.logout();
    } else if (e.currentTarget.id === "liked-listings") {
      this.props.history.push("/saved");
    } else {
      this.props.history.push("/searches");
    }
  }

  toggleDropdown() {
    const dropdown = document.querySelector(".user-dropdown");
    dropdown.classList.toggle("drop-open");
    dropdown.focus();
  }

  render() {
    const display = this.props.currentUser ? (
      <>
        <p>{this.props.currentUser.email}</p>
  
        <figure className="user-icon" onClick={this.toggleDropdown}></figure>
        <UserDropdown currentUser={this.props.currentUser} handleClick={this.handleClick} toggle={this.toggleDropdown}  />
      </>
    ) : (
      <>
          <div className="test-button" onClick={() => this.props.openModal("signin")}>Sign In</div>
      </>
    );

    return (
      <nav className="header-menu">
        {display}
      </nav>
    )
  }
}

export default withRouter(Greeting);