/* eslint-disable */
import React, { Component } from 'react';

class SearchBar extends Component {
  updateList = (event) => {
    
  }

  render() {
    return (
        <input type="text" className="form-search"
        onChange={this.updateList} /> 
    );
  }
}

export default SearchBar;
