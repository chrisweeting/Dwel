import React from 'react';


class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listing.id);
  }

  render() {

    return (
      <div className="listing-detail-section">
        <li>{this.props.listing.street_address}</li>

      </div>
    );

  }
}

export default ListingDetail;