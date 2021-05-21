import React from 'react'
import { withRouter } from 'react-router'
import MarkerManager from '../../util/marker_manager';


class ListingMap extends React.Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
  }


  componentDidMount() {
    // const uluru = { lat: -25.344, lng: 131.036 };
    // // The map, centered at Uluru
    // const map = new window.google.maps.Map(document.getElementById("map-container"), {
    //   zoom: 4,
    //   center: uluru,
    // });
    // // The marker, positioned at Uluru
    // const marker = new window.google.maps.Marker({
    //   position: uluru,
    //   map: map,
    // });
   
    const mapOptions = {
      center: { lat: 42.25032003839574, lng: - 73.78557614716786 },
      zoom: 10,
      disableDefaultUI: "true"
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    console.log("hello");
    this.mapListener();
    this.MarkerManager.updateMarkers(this.props.listings);
    setTimeout(
      () => this.listingListeners(),
      200
    );
  }
  
  listingListeners() {
    const listings = document.querySelectorAll(".listing-short")
    console.log(listings);
    // debugger
    listings.forEach((listing) => listing.addEventListener("mouseover", () => this.handleHover(listing.hash)));
    
    // document.addEventListener()
  }
  
  mapListener() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      // debugger
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      // this.props.updateFilter("bounds", bounds);
    });
    
  }
  
  handleHover(e) {
    // debugger

    let id = parseInt(e.slice(e.length -1));
    let marker = this.MarkerManager.markers[id];
    var latLng = marker.getPosition(); 

    setTimeout(
      () => this.map.setCenter(latLng),
      200
    );
    
    // const infowindow = new google.maps.InfoWindow({
    //   content: `${this.keys}`
    // });
    // infowindow.open(this.map, marker);
    // var infoWindow = marker.infoWindow; 
    // marker.addListener('mouseup', function () {
    //   infowindow.close();
    // });
    // () => {infowindow.close}
  }
  

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }
  
  handleMarkerClick(listing) {
    this.props.history.push(`homes/${listing.id}`);
  }

  render() {
    return (
      <div id="listing-map-container" ref={map => this.mapNode = map}  >


      </div>
    )
  }
}

export default withRouter(ListingMap)


