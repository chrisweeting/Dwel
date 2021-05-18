import React from 'react';
import { withRouter } from 'react-router-dom';



class ListingDetailMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: {
        lat: this.props.listing.latitude,
        lng: this.props.listing.longitude
       },
       zoom: 15,
      disableDefaultUI: "true"
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.createMarkerFromListing(this.props.listing);
    // debugger
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.latitude, listing.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id
    });
    this.marker = marker;
  }

  render() {
    return (
      <div 
      id="listing-detail-map-container" ref={map => this.mapNode = map}  >


      </div>
    )
  }

}

export default withRouter(ListingDetailMap);