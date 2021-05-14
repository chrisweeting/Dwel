import React from 'react';
import { Link } from 'react-router-dom';


const UserDropdown = (props) => {
  return (
    <section className="user-dropdown" onBlur={props.toggle} tabIndex="0">
      <Link id="icon-cover" to="/"></Link>
      <Link className="dropdown-links" to={`/${props.currentUser.id}/searches`} >Saved searches</Link>
      <Link className="dropdown-links" to={`/${props.currentUser.id}/listings`} >Saved listings</Link>
      <div className="dropdown-links" onClick={props.handleClick} >Logout</div>
    </section>
  )
};

export default UserDropdown;

