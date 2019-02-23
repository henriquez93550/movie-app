import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    value: ""
  };

  doSearch = event => {
    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);
    // waits half a second before starting the search
    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };
  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
