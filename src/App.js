import React, { Component } from 'react';
// components
import Routes from "./components/routes";
import Nav from "./components/nav";


//store
import Store from "./store/store";
import {Provider} from "react-redux";


class App extends Component {

render() {
  
    return (
    <Provider store={Store}>

          <div>
           
            <Nav />
            <Routes />
          </div>

    </Provider>
    );
  }
}

export default App;
