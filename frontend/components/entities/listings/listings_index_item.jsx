import React from 'react';
import { Link, withRouter } from 'react-router-dom';




const ListingIndexItem = ({ listing, openModal, currentUser, likes, createLike, removeLike, setState }) => {

  const handleClick = (e) => {
    if (!currentUser.id) {
      openModal("signin");
    } else if (likes.includes(listing.id)) {
      removeLike(listing.id);

      let filtered = likes.filter(like => like !== listing.id);
      setState({likes: filtered });
    } else {
      createLike({ userId: currentUser.id, listingId: listing.id });
      let newLikes = likes.concat([listing.id]);
      setState({ likes: newLikes });
    }
  };

  const saveIcon = likes.includes(listing.id) ? "listing-short-liked" : "listing-short-like";
  const priceUs = new Intl.NumberFormat().format(listing.price)
  return (
    <Link className="listing-short" to={`/homes/homedetails/${listing.id}`} id={listing.id}>
      <img src={listing.photoUrls} alt="" className="listing-photo"/>
      <div className={saveIcon} id={listing.id} onClick={(e) => {e.preventDefault(); handleClick(e)}} > </div>
      <div className="listing-sum">
        <li className="listing-card-1" key={`1-${listing.price}`} >${priceUs}</li>
        <li className="listing-card-2" key={`2-${listing.price}`} >{listing.beds}bds {listing.baths}ba {listing.sq_ft}sq ft - {listing.listing_type} {listing.status} </li>
        <li className="listing-card-3" key={`3-${listing.price}`} >{listing.street_address}, {listing.city}, {listing.state} {listing.postal_code}</li>
      </div>
    </Link>
  )
}
  
;

export default withRouter(ListingIndexItem);
