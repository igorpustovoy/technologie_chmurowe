import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import Main from './Main';

axios.defaults.baseURL = "/api/";

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Main></Main>
      </div>
    );
  }
}
