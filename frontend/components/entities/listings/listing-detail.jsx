import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import ListingDetailMap from '../../map/listing_detail_map';



class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: this.props.listing,
      likes: this.props.currentUser.liked_listings,
      gallery: false
    };
    

    this.setState = this.setState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.gallery = this.gallery.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId).then((res) => {
      this.setState({ house: res.listing });
    });
  }

  handleClick(e) {
    let likes = this.state.likes;

    if (!this.props.currentUser.id) {
      this.props.openModal("signin");
    } else if (likes.includes(this.props.listing.id)) {
 
      this.props.removeLike(this.props.listing.id);

      let nextState = this.state.likes.filter(like => like !== this.props.listing.id );

      this.setState({
          likes: nextState
      });

    } else {
      this.props.createLike({userId: this.props.currentUser.id, listingId: this.props.listing.id});

      let nextState = this.state.likes;
      nextState.push(this.props.listing.id);

      this.setState({
        likes: nextState
      });
    }

  }

  handleRedirect() {
    this.props.history.goBack();
  }

  gallery() {
    debugger
    return (
      <>
        <div className="gallery-screen" onClick={() => this.setState({ gallery: false })}></div>
        <div className="gallery-image" onClick={() => this.setState({ gallery: false })}>
          <img src={this.props.listing.photoUrls[this.state.gallery]} alt="" onClick={(e) => {e.stopPropagation(); this.setState({ gallery: (this.state.gallery + 1) % this.props.listing.photoUrls.length })} }/>
        </div>
      </>
    )
  }

  render() {
    const { listing, currentUser } = this.props;
    if (!listing) return null;

    const photos = this.props.listing.photoUrls.map((url, i) => {
      return (
        <div key={i} id={i} onClick={() => this.setState({ gallery: i })}>
          <img src={url} alt="" key={`photo-${i}`} className={`photo`} />
        </div>
      )
    })

    const gallery = this.state.gallery !== false ? this.gallery() : null;
    
    let likes = this.state.likes
    
    const saveIcon = likes.includes(listing.id) ? "saved-icon" : "save-icon"
    const saveText = likes.includes(listing.id) ? "Saved" : "Save"

    const { price, street_address, beds, baths, sq_ft, listing_type, status, city, state, postal_code, description } = this.props.listing;
    const priceUs = new Intl.NumberFormat().format(price)
    return (
      <>
        {gallery}
        <div className="listing-detail-screen" >
          <div onClick={this.handleRedirect} className="ld-close"  >x</div>
          <div className="listing-detail-section" tabIndex="0" onBlur={() => <Redirect to="/"/>}>
            <figure className="photo-gallery">
              {photos}
            </figure>
            <section className="listing-detail">
              <div className="listing-top">
                <nav className="listing-detail-nav">
                  <h1 id="ld-nav-logo">Dwel.</h1>
                  <div className="save-button" onClick={(e) => this.handleClick(e) }>
                    <div id={saveIcon}>
                    </div>
                    {saveText}
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
              <div className="lst-map">
                <ListingDetailMap listing={this.props.listing} />
              </div>
            </section>
          </div>
        </div>
      </>
    );

  }
}

export default ListingDetail;