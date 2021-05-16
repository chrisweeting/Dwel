import React from 'react';
import { Link } from 'react-router-dom';




const ListingIndexItem = ({ listing }) => (
  <Link className="listing-short" to={`/homes/${listing.id}`} key={listing.id} >
    <img src={listing.photoUrls} alt="" className="listing-photo"/>
    <div className="listing-sum">
      <li>{listing.price}</li>
      <li>{listing.beds}bds {listing.baths}ba {listing.sq_ft}sq ft - {listing.listing_type} {listing.status} </li>
      <li>{listing.street_address}, {listing.city}, {listing.state} {listing.postal_code}</li>
    </div>
  </Link>
);

export default ListingIndexItem;
