import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent/DisplayComponent';
import ButtonComponent from './ButtonComponent/ButtonComponent';
import axios from 'axios';
import './HomeComponent.css';
import SearchComponent from './SearchComponent/SearchComponent';
import GetTitleComponent from './GetTitleComponent/GetTitleComponent';



const apikey = 'ORhJ9YTjQ7XFZfjjoca394Gw1VzmSzaz';

class HomeComponent extends Component {
  state = {
    gif: { 
      title:''
    },
    list: [], 
    newInput: '',
  }

  handleClick = () => {
    this.setState({ gif: this.state.list[Math.floor(Math.random() * this.state.list.length)]});
  }
  
  componentDidMount() {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=cheeseburgers`).then((response) => {
      const { data } = response.data;
      this.setState({ gif: data[Math.floor(Math.random() * data.length)], list: data });
    })
  }
  
  handleSearchBar = (input)=>{
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${input}`).then((response) => {
      const { data } = response.data;
      this.setState({ gif: data[Math.floor(Math.random() * data.length)], list: data });
    })
  }
  render() {
    // console.log('gif',this.state.gif.title)
    const newList = this.state.list.filter((gif) => {
        return gif !== this.state.gif  
    })
    
    return (
      <div className="home">
          <DisplayComponent divClass="big-img" displayGif={this.state.gif} />
          <GetTitleComponent title={this.state.gif.title}/>
          <ButtonComponent handleClick={() => this.handleClick()} />
          <SearchComponent searchInput={this.handleSearchBar}/>
          <div className="list-img"> 
          {newList.map((item,index) => {
            return <DisplayComponent key={index} divClass="small-img" displayGif={item} />
          })} 
          </div>
      </div>
    )
  }
}
export default HomeComponent;