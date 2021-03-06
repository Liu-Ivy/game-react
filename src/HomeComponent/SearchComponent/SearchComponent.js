import React, { Component } from 'react'

class SearchComponent extends Component {
  state={
    inputSearch: '',
  }

  handleSearchBar = (event) => {
    const newInput = event.target.value;
    this.props.searchInput(newInput);
    this.setState({ inputSearch: event.target.value })
  }
  
  render() {
    return (
      <div className="search-bar">
      <input type="text" placeholder="ex:dog" value={this.state.inputSearch} onChange={this.handleSearchBar}/>
     </div>
    )
  }
}
export default SearchComponent;
