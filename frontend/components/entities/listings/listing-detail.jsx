import React from 'react';
import { Link } from 'react-router-dom';


class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listing.id);
  }

  render() {
    const photos = this.props.listing.photoUrls.map((url, i) => {
      return (
        <div key={`photo-${i}`}>
          <img src={url} alt="" className={`photo`} />
        </div>
      )
    })
    const { price, street_address, beds, baths, sq_ft, listing_type, status, city, state, postal_code } = this.props.listing;
    
    return (
      <Link to="/homes" className="listing-detail-screen">
        <div className="listing-detail-section">
          <figure className="photo-gallery">
            {photos}
          </figure>
          <section className="listing-detail">
            <nav className="listing-detail-nav">
              <h1 id="ld-nav-logo">Dwel.</h1>
              <div className="save-button">
                <div id="save-icon">

                </div>
                Save
              </div>
            </nav>
            <div className="listing-detail-1">
              <span>{price}</span>  {beds}
            </div>
          </section>
        </div>
      </Link>
    );

  }
}

export default ListingDetail;