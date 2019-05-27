import React, { Component } from 'react';
// components
import Routes from "./components/routes";
import Nav from "./components/nav";
import image from "../src/869.svg";

//store
import Store from "./store/store";
import {Provider} from "react-redux";


class App extends Component {

render() {
  
    return (
    <Provider store={Store}>

          <div className="container">
                          
            <header className="header">
              <div>
              <h1>News<br/>React</h1>
              
              <p> Powered By <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a></p>
              </div>
              <img src={image} alt="hero" />
            </header>  
              
            <Nav />
            <main>
              <Routes />
            </main>
          </div>

    </Provider>
    );
  }
}

export default App;
