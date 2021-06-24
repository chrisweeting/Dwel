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
    this.prevPic = this.prevPic.bind(this);
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

  prevPic() {
    if (this.state.gallery === 0) {
      return this.props.listing.photoUrls.length - 1;
    } else {
      return this.state.gallery - 1;
    }
  }

  gallery() {
    const { photoUrls, status, price, beds, baths, sq_ft, id } = this.props.listing;
    const saveIcon = this.state.likes.includes(id) ? "gallery-saved-icon" : "gallery-save-icon";
    return (
      <>
        <div className="gallery-save-button" onClick={(e) => {e.stopPropagation(); this.handleClick(e)}}>
          <div id={saveIcon}>
          </div>
          Save Home
        </div>
        <div className="gallery-close" onClick={() => this.setState({ gallery: false })}>x</div>
        <div className="gallery-screen" onClick={() => this.setState({ gallery: false })}>
          <div className="gallery-screen-top">
          </div>
          <div className="gallery-screen-mid">
            <div
              className="gallery-prev"
              onClick={(e) => {
                e.stopPropagation();
                this.setState({
                  gallery: this.prevPic()
                })
              }}
            ></div>

            <div
              className="gallery-next"
              onClick={(e) => {
                e.stopPropagation();
                this.setState({
                  gallery: (this.state.gallery + 1) % photoUrls.length
                })
              }}
            ></div>

          </div>
          <div className="gallery-screen-bottom"></div>
        </div>
        <div className="gallery-image" onClick={() => this.setState({ gallery: false })}>
          <div 
            className="gallery-number"
            onClick={(e) => e.stopPropagation()}
          >
            {this.state.gallery + 1} of {photoUrls.length + 1}
          </div>
          <img 
            src={photoUrls[this.state.gallery]} 
            alt="" 
            onClick={(e) => {
              e.stopPropagation(); 
              this.setState({ 
                gallery: (this.state.gallery + 1) % photoUrls.length 
              })
            }}
          />
          <div className="gallery-stats">{status}: {price} ({beds} beds, {baths} baths, {sq_ft} Square Feet)</div>
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