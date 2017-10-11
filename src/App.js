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
  $("#menu").next("UL").slideToggle();

});


$(window).on("load", "#menu" , ()=>{
  if(window.innerWidth < 650 ){

    $("#menu").next("UL").slideUp();
   
  }else {
    $("#menu").next("UL").slideDown();
    
  }

});

$(window).on("resize", ()=>{
  if(window.innerWidth < 650 ){
    
    $("#menu").next("UL").slideUp();
  }else{
    $("#menu").next("UL").slideDown();
  }
})




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
