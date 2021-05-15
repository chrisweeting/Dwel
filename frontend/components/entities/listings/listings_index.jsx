import React from 'react';


class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }
  
  componentDidMount() {
    debugger
    this.props.fetchListings();
  }

  render() {
    const { listings } = this.props;
    debugger
    return (
      <div>
        <ul>
          {
            listings.map(listing => <li key={listing.id} >{listing.city}</li>)
          }
        </ul>
       
      </div>
    );
    // return null;
  }
}

export default ListingIndex;