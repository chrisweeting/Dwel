import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const UserDropdown = (props) => {
  return (
    <section className="user-dropdown" onBlur={props.toggle} tabIndex="0">
      <Link id="icon-cover" to="/"></Link>
      <div className="dropdown-links" id="saved-searches" onClick={props.handleClick} >Saved Searches</div>
      <div className="dropdown-links" id="liked-listings" onClick={props.handleClick} >Liked Listings</div>
      <div className="dropdown-links" id="logout" onClick={props.handleClick} >Logout</div>
    </section>
  )
};

export default withRouter(UserDropdown);

