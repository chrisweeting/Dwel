import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.filters;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e, filter, func) {
    func(filter, e.currentTarget.value);
  }

  handleClick() {
    let newSearch = {
      max_price: this.state.maxPrice,
      max_sqft: this.state.maxSqft ,
      min_baths: this.state.minBaths,
      min_beds: this.state.minBeds,
      min_price: this.state.minPrice,
      query: this.state.query
    };

    this.props.createSearch(newSearch);
  }

  update(e) {
    this.setState({ query: e.currentTarget.value });
  }

  handleSubmit() {
    this.props.updateFilter( "query", this.state.query );
  }

  render() {
    return (
      <nav className="lst-searchbar">
        <form className="lst-searchbar-container" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter an address, city, or Zip code" id="lst-searchbar-inpt" value={this.state.query} onChange={this.update} />
          <button id="lst-search-submit"></button>
        </form>

        <label htmlFor=""> 
          <select className="lst-dropdown" value={this.props.filters.minPrice} onChange={(e) => this.handleChange(e, 'minPrice', this.props.updateFilter)}>
            <option value="300000">Price</option>
            <option value="400000">$400,000+</option>
            <option value="500000">$500,000+</option>
            <option value="600000">$600,000+</option>
            <option value="700000">$700,000+</option>
            <option value="800000">$800,000+</option>
            <option value="900000">$900,000+</option>
          </select>
        </label>
        <label htmlFor=""> 
          <select className="lst-dropdown" value={this.props.filters.minBeds} onChange={(e) => this.handleChange(e, 'minBeds', this.props.updateFilter)}>
            <option value="0">Beds</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </label>
        <label htmlFor=""> 
          <select className="lst-dropdown" value={this.props.filters.minBaths} onChange={(e) => this.handleChange(e, 'minBaths', this.props.updateFilter)}>
            <option value="0">Baths</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </label>
        <label htmlFor=""> 
          <select className="lst-dropdown" value={this.props.filters.minPrice} onChange={(e) => this.handleChange(e, 'minSqft', this.props.updateFilter)}>
            <option value="500">Sqft</option>
            <option value="1000">1000+</option>
            <option value="2000">2000+</option>
            <option value="3000">3000+</option>
            <option value="4000">4000+</option>
            <option value="5000">5000+</option>
          </select>
        </label>
        <button className="save-search" onClick={this.handleClick}>Save Search</button>
      </nav>

    )
  }
}


export default SearchBar;