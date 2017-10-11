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
    "height": "auto", 
    "overflow": "visible"
  });

});

$("body").on("dblclick", "#menu", ()=>{
  $("#menu").next("UL").css({
    "height": "0", 
    "overflow": "hidden"
  });

});


$("body").on("click", ".small", ()=>{
  $(".links").css({
    "height": "0", 
    "overflow": "hidden"
  });

});


$(window).on("load", "#menu" , ()=>{
  if(window.innerWidth > 650 ){

    $("#menu").next("UL").css({
      "height": "auto", 
      "overflow": "visible"
    });
  }

});

$(window).on("resize", ()=>{
  if(window.innerWidth > 650 ){
    
    $("nav ul li").removeClass("small");
    $("#menu").next("UL").css({
      "height": "auto", 
      "overflow": "visible"
    });
  }else{
    $("nav ul li").addClass("small");
  }
})


$(window).on("load", "#menu" , ()=>{
  if(window.innerWidth > 650 ){
    $("nav ul li").removeClass("small");
    $("#menu").next("UL").css({
      "height": "auto", 
      "overflow": "visible"
    });
  }else{
    $("nav ul li").addClass("small");
  }

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
