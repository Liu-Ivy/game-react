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
  // handleSubmit = event =>{
  //   event.preventDefault();
  //   this.props.handleFormSubmit(this.state.inputSearch);
  // }
  
  render() {
    return (
      <div className="search-bar">
        {/* <form onSubmit={this.handleSubmit}> */}
          <input type="text" placeholder="ex:dog" value={this.state.inputSearch} onChange={this.handleSearchBar}/>
        {/* </form> */}
     </div>
    )
  }
}
export default SearchComponent;

{/* <input type="text" placeholder="" value={this.state.inputSearch} onChange={this.handleSearch} /> */}