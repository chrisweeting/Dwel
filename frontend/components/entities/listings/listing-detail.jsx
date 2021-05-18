import React from 'react';
import { Link,Redirect } from 'react-router-dom';


class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId).then((res) => {
      this.setState(res.listing.listing);
    });
  }

  render() {
    const { listing } = this.props;
    if (!listing && !this.state ) return null;


    const photos = this.state.photoUrls.map((url, i) => {
      return (
        <div key={`photo-${i}`}>
          <img src={url} alt="" className={`photo`} />
        </div>
      )
    })
    const { price, street_address, beds, baths, sq_ft, listing_type, status, city, state, postal_code, description } = this.state;
    const priceUs = new Intl.NumberFormat().format(price)
    return (
      <div  className="listing-detail-screen">
        <Link to="/homes" className="ld-close">x</Link>
        <div className="listing-detail-section" tabIndex="0" onBlur={() => <Redirect to="/"/>}>
          <figure className="photo-gallery">
            {photos}
          </figure>
          <section className="listing-detail">
            <div className="listing-top">
              <nav className="listing-detail-nav">
                <h1 id="ld-nav-logo">Dwel.</h1>
                <div className="save-button">
                  <div id="save-icon">
                  </div>
                  Save
                </div>
              </nav>
              <div className="listing-detail-1">
                <h1>${priceUs}</h1>  <span>{beds}bd</span> <span>{baths}ba</span> <span>{sq_ft}sqft</span>
              </div>
              <div className="listing-detail-2">
                <h1>{street_address}, {city}, {state} {postal_code}</h1>
                <h1>{status}</h1>
              </div>
              <div className="listing-nav-2">

              </div>
            </div>
            <div className="listing-overview">
              <p>{description}</p>
            </div>
          </section>
        </div>
      </div>
    );

  }
}

export default ListingDetail;