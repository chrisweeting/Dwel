[![dwel_logo](https://dwel-us-dev.s3.amazonaws.com/dwel.png)](https://dwel-us.herokuapp.com/#/)
Dwel is a clone of the real estate website Zillow.

Technologies
---
This project was made using:

 - **Frontend:** React, Redux, JavaScript and Google Maps JavaScript API
 - **Backend:** PostgreSQL, Rails, Ruby, and AWS
<img src="https://dwel-us-dev.s3.amazonaws.com/dwel_splash.png" width="100%" >


Features
---
**User Authentication**
<img src="https://dwel-us-dev.s3.amazonaws.com/dwel_auth.gif" width="100%" >

Dwel uses a combination of frontend and server-side validations to provide the user with a seamless and secure experience. The new user account form uses a checklist to show the user what they need to add to make their password more secure.


```js  
checkPassword(password = this.state.password) {
    const passwordCheck = {
      length: '',
      charMix: '',
      special: '',
      caseMix: '',
      complete: false
    }
    if (password.length > 0) {
      passwordCheck["length"] = (password.length > 7) ? "complete" : "not-complete";
      passwordCheck["charMix"] = this.checkCharMix(password) ? "complete" : "not-complete";
      passwordCheck["special"] = this.checkSpecial(password) ? "complete" : "not-complete";
      passwordCheck["caseMix"] = this.checkCaseMix(password) ? "complete" : "not-complete";
    }

    passwordCheck["complete"] = this.allComplete(passwordCheck);

    return passwordCheck;
}
```

**Listing Map**
<img src="https://dwel-us-dev.s3.amazonaws.com/dwel_map.gif" width="100%" >

Listings can be easily located on the embedded google map by hovering over the listing description cards. When the listing map component is mounted, event listeners are applied to all of the listing description cards. Set timeout is used to delay the pan to the selected marker, this makes the whole process look a lot smoother.

```js 
listingListeners() {
    const listings = document.querySelectorAll(".listing-short");
    listings.forEach((listing) => listing.addEventListener("mouseover", () => this.handleHover(listing.id)));
}

handleHover(id) {
    const marker = this.MarkerManager.markers[id];
    const latLng = marker.getPosition(); 

    setTimeout(
      () => this.map.panTo(latLng),
      200
    );
}
```

**Listing Search**
<img src="https://dwel-us-dev.s3.amazonaws.com/dwel_save_search.gif" width="100%" >

Users can search listings by address, city, state, or postal code. Listings can also be filtered by several attributes. The parameters of a user's search can be saved. Saved searches can be accessed on the user's saved searches page, here the user can run the search again or edit the saved search. 

When a saved search is run, the parameters are compiled into a query string and the presence of this string allows users to not only see the results of the saved search but also update the parameters of the saved search.

Creating query string:
```js
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
```

Parsing query string:
```js
componentDidMount() {
    const path = this.props.location.pathname.split("/");
    if (path.length > 4) {
      const search = {
        minBeds: parseInt(path[2]),
        minBaths: parseInt(path[3]),
        maxSqft: parseInt(path[4]),
        minPrice: parseInt(path[5]),
        maxPrice: parseInt(path[6]),
        query: path[7],
      };
      this.props.updateFilters(search).then(this.setState({ title: path[8] }));
    }
}
```
