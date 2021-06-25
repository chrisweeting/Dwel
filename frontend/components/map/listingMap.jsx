import React from 'react'
import { withRouter } from 'react-router'
import MarkerManager from '../../util/marker_manager';


class ListingMap extends React.Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
  }


  componentDidMount() {
    const mapOptions = {
      center: { lat: 42.25032003839574, lng: - 73.78557614716786 },
      zoom: 10,
      disableDefaultUI: "true"
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.mapListener();
    this.MarkerManager.updateMarkers(this.props.listings);
    setTimeout(
      () => this.listingListeners(),
      1200
    );
  }
  
  listingListeners() {
    const listings = document.querySelectorAll(".listing-short");
    listings.forEach((listing) => listing.addEventListener("mouseover", () => this.handleHover(listing.id)));
  }
  
  mapListener() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      //  
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      // this.props.updateFilter("bounds", bounds);
    });
    
  }
  
  handleHover(id) {
    const marker = this.MarkerManager.markers[id];
    const latLng = marker.getPosition(); 

    setTimeout(
      () => this.map.panTo(latLng),
      200
    );
  }
  

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
    setTimeout(
      () => this.listingListeners(),
      1200
    );
  }
  
  handleMarkerClick(listing) {
    this.props.history.push(`homes/homedetails/${listing.id}`);
  }

  render() {
    return (
      <div id="listing-map-container" ref={map => this.mapNode = map}  >


      </div>
    )
  }
}

export default withRouter(ListingMap)


