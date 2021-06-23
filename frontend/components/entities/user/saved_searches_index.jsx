import React from 'react';

class SavedSearchesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      search: null,
      title: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    this.props.removeSearch(this.state.search.id).then(this.setState({ modal: false }));
  }

  handleSubmit() {
    const search = this.state.search;
    const title = this.state.title.length > 0 ?
      this.state.title :
      "My Saved Search";

    search.title = title;
    this.props.updateSearch(search).then(this.setState({ modal: false }));
  }

  openSearch(e) {
    const search = this.props.searches.filter(search => `${search.id}` === e.currentTarget.id);
    const { 
      min_beds,
      min_baths,
      max_sqft,
      min_price,
      max_price,
      query,
      title,
      id
    } = search[0];

    this.props.history.push(
      `/homes/${min_beds}/${min_baths}/${max_sqft}/${min_price}/${max_price}/${query}/${title}/${id}`
    );
  }

  update(e) {
    this.setState({ title: e.currentTarget.value });
  }

  editModal() {
    return(
      <>
        <div className="edit-modal-screen" onClick={() => this.setState({ modal: false })}></div>
        <div className="edit-modal">
          <div className="edit-modal-nav">Edit saved search</div>
          <label > Name
            <br />
            <input type="text" placeholder={this.state.search.title} value={this.state.title} onChange={this.update}  />
          </label>
          <div className="edit-modal-buttons">
            <div className="edit-modal-delete" onClick={this.handleClick}>Delete</div>
            <section className="edit-modal-buttons-right">
              <div className="edit-modal-cancel" onClick={() => this.setState({ modal: false })}>Cancel</div>
              <button disabled={this.state.title === this.state.search.title} onClick={this.handleSubmit}>Update</button>
            </section>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { searches } = this.props;
    const searchItems = searches.map((search) => {
      return (
        <div key={search.id} className="search-card" >
          <div onClick={this.openSearch} id={search.id} >{search.title}</div>
          <div onClick={() => this.setState({ modal: true, search: search, title: search.title })} id={search.id} >Edit</div>
        </div>
      )
    })
    const editModal = this.state.modal ? this.editModal() : null;

    const sIText = searchItems.length === 1 ? 
      '1 saved search':
      `${searchItems.length} saved searches`
    
    return (
      <>
        {editModal}
        <div className="saved-searches-section">
          <h1>Saved Searches</h1>
          <h2>{sIText}</h2>
          <ul className="saved-listing-items">
            {searchItems}
          </ul>
          <footer>

          </footer>
        </div>
      </>
    );

  }
}

export default SavedSearchesIndex;