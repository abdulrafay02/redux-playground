import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux"

import Posts from "./components/posts"
import PostForm from "./components/postForm"
import store from "./store"


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Example</h1>
        </header>
        <div className="App-content">
          <PostForm/>
          <hr/>
          <Posts/>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
