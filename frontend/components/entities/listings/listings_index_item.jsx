import React from 'react';
import { Link, withRouter } from 'react-router-dom';




const ListingIndexItem = ({ listing, openModal, currentUser, likes, createLike, removeLike }) => {

  const handleClick = (e) => {
    if (!currentUser) {
      openModal("signin");
    } else if (listing.likers.includes(currentUser)) {
      let obj = likes;

      for (const [key, value] of Object.entries(obj)) {
        if (value["listing_id"] === listing.id) {
          removeLike(key);
        }
      }
    } else {
      createLike({ userId: currentUser, listingId: listing.id });
    }
    
  };


  // if (likes.include(currentUser))
  const saveIcon = listing.likers.includes(currentUser) ? "listing-short-liked" : "listing-short-like";
  debugger
  return (
    <Link className="listing-short" to={`/homes/${listing.id}`} >
      <img src={listing.photoUrls} alt="" className="listing-photo"/>
      <div className={saveIcon} id={listing.id} onClick={(e) => {e.preventDefault(); handleClick(e)}} > </div>
      <div className="listing-sum">
        <li key={`1-${listing.price}`} >{listing.price}</li>
        <li key={`2-${listing.price}`} >{listing.beds}bds {listing.baths}ba {listing.sq_ft}sq ft - {listing.listing_type} {listing.status} </li>
        <li key={`3-${listing.price}`} >{listing.street_address}, {listing.city}, {listing.state} {listing.postal_code}</li>
      </div>
    </Link>
  )
}
  
;

export default withRouter(ListingIndexItem);
