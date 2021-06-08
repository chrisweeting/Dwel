import React from 'react';


class HeroSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        // bounds: {},
        minBeds: 0,
        minBaths: 0,
        minSqft: 500,
        maxSqft: 7000,
        minPrice: 50000,
        maxPrice: 1000000000,
        query: '',
      },
      searchBar: false
    };
    

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stickyBar = this.stickyBar.bind(this);
  }

  componentDidMount() {
    this.props.updateFilters({
      minBeds: 0,
      minBaths: 0,
      minSqft: 500,
      maxSqft: 7000,
      minPrice: 50000,
      maxPrice: 1000000000,
      query: '',
    });
    window.addEventListener("scroll", this.stickyBar);
    this.props.fetchListings(this.state.filters);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.stickyBar);
  }

  stickyBar() {
    if (scrollY >= 325) {
      this.setState({ searchBar: true });
    } else {
      this.setState({ searchBar: false });
    }
  }

  update(e) {
    // debugger
    this.setState({ filters: { query: e.currentTarget.value } });
  }

  handleSubmit() {
    this.props.updateFilter("query", this.state.filters.query);
    if (this.state.filters.query.length > 0) {
      this.props.history.push("/homes");
    }
  }


  render() {
    return (
      <>
        <form className={this.state.searchBar ? "search-container sticky" : "search-container"} onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            className={this.state.searchBar ? "searchbar stick" : "searchbar"} 
            placeholder="Enter an address, city, or Zip code" 
            id="searchbar" 
            value={this.state.filters.query} 
            onChange={this.update} 
          />
          <button id="search-submit"></button>
        </form>
        <div className={this.state.searchBar ? "bar active" : "bar"} ></div>
      </>

    )
  }
}


export default HeroSearchBar;