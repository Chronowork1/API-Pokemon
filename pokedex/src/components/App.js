import React, { Component } from 'react';
import PokeList from "./PokeList";
import DetailView from './DetailView';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.handleClick = this.handleOnClick.bind(this);
  }

  handleonClick(id) {
    console.log(id);
  }

  render() {
    return (
      <div className = "App">
        <PokeList handleonClick = {this.handleOnClick}/>
        <DetailView />
      </div>
    )
  }
}

export default App;