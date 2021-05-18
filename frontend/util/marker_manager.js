
class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {
    const hauses = {}; 

    listings.forEach(listing => hauses[listing.id] = listing); //fill empty haus object

    const filtered = listings.filter(listing => !this.markers[listing.id]) 
    filtered.forEach(newListing => this.createMarkerFromBench(newListing, this.handleClick));
      
    const listingIds = Object.keys(this.markers).filter(listingId => !hauses[listingId]);
    listingIds.forEach((listingId) => this.removeMarker(this.markers[listingId]));

    let m = document.getElementById("listing-map-container");
    m.style.position = "fixed";
  }

  createMarkerFromBench(listing) {
    const position = new google.maps.LatLng(listing.latitude, listing.longitude);
    // debugger
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id
    });
    // debugger
    if (listing.photoUrls) {
      const price = new Intl.NumberFormat().format(listing.price)
      const infowindow = new google.maps.InfoWindow({
        content: `<img height='100px' width='166px' src=${listing.photoUrls[0]} />`
          + `<p style="text-align:center; font-weight:600;" >$${price}</p>`
      });
      marker.addListener('click', () => this.handleClick(listing));
      this.markers[marker.listingId] = marker;
  
      marker.addListener('mouseover', function () {
        console.log('hehe')
        infowindow.open(marker.map, marker);
      });
  
      marker.addListener('mouseout', function () {
        infowindow.close();
      });
    }
  
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }

}

export default MarkerManager;