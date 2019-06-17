import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent/DisplayComponent';
import ButtonComponent from './ButtonComponent/ButtonComponent';
import axios from 'axios';
import './HomeComponent.css';
import SearchComponent from './SearchComponent/SearchComponent';
import { async } from 'q';



const apikey = 'ORhJ9YTjQ7XFZfjjoca394Gw1VzmSzaz';

class HomeComponent extends Component {
  state = {
    gif: { },
    list: [], 
    newInput: ''
  }

  handleClick = () => {
    this.setState({ gif: this.state.list[Math.floor(Math.random() * this.state.list.length)]});
  }

  componentDidMount() {
    // console.log('componentDidMount')
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=cats`).then((response) => {
      console.log('response', response)
      const { data } = response.data;
      this.setState({ gif: data[Math.floor(Math.random() * data.length)], list: data });
    })
  }
  
  handleSearchBar = (input)=>{
    // console.log('input', input)
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${this.state.newInput}`)
    .then((response)=>{
      this.setState({newInput:input})
    })  
  }

  // handleTermChange = (term) => {
  //   axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${term.replace(/\s/g, '+')}`)
  //   .then((response)=> {
  //       this.setState({ gifs: res.body.data }))
  //   }}
    
  render() {
    const newList = this.state.list.filter((gif) => {
        return gif !== this.state.gif  
    })
    console.log('render')
    
    return (
      <div className="home">
          <DisplayComponent divClass="big-img" displayGif={this.state.gif} />
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