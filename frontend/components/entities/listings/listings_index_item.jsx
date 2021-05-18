import React from 'react';
import { Link } from 'react-router-dom';




const ListingIndexItem = ({ listing, openModal }) => (
  <Link className="listing-short" to={`/homes/${listing.id}`} >
    <img src={listing.photoUrls} alt="" className="listing-photo"/>
    <div className="listing-short-like" onClick={(e) => {e.preventDefault(); openModal("signin")}} ></div>
    <div className="listing-sum">
      <li key="1" >{listing.price}</li>
      <li key="2" >{listing.beds}bds {listing.baths}ba {listing.sq_ft}sq ft - {listing.listing_type} {listing.status} </li>
      <li key="3" >{listing.street_address}, {listing.city}, {listing.state} {listing.postal_code}</li>
    </div>
  </Link>
);

export default ListingIndexItem;
