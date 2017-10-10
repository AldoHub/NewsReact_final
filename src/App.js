import React, { Component } from 'react';
import $ from "jquery";
// components
import Routes from "./components/routes";
import Nav from "./components/nav";


//store
import Store from "./store/store";
import {Provider} from "react-redux";


import AwesomeComponent from "./components/loader";

class App extends Component {

componentDidMount(){
$("body").on("click", "#menu", ()=>{
  $("#menu").next("UL").css({
    "height": "auto"
  });

});



$("body").on("mouseleave", ".links", ()=>{
  $("nav ul").css({
    "height": ""
  });

});

}

render() {
  
    return (
    <Provider store={Store}>

          <div>
          <AwesomeComponent  />
          <Nav />
          <Routes />
          </div>

    </Provider>
    );
  }
}

export default App;
