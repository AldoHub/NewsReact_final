import React, { Component } from 'react';
import $ from "jquery";
// components
import News from "./components/news";
import Business from "./components/business";
import Games from "./components/games";
import Fame from "./components/fame";
import Tech from "./components/tech";
import Sports from "./components/sports";
import CustomSearch from "./components/customSearch";
//store
import Store from "./store/store";
import {Provider} from "react-redux";

//react router
import {BrowserRouter, Route} from "react-router-dom";


import AwesomeComponent from "./components/loader";

class App extends Component {

  componentDidMount=()=>{

    
     $("body").on("click", "#menu" , (e)=>{
       let $this= $(e.target);
       $this.next("UL").slideToggle();
     });
     
     

    //after the component is mounted check the size of the window
    //and react upon that, top show or hide the menu 
    
    if(window.innerWidth < 650){
         
      $("#menu").next("UL").hide();
    }else{
      $("#menu").next("UL").show();
    }
  


  } 

  

  render() {
  
    return (
    <Provider store={Store}>
     
      <BrowserRouter>   
    
        <div>
          <AwesomeComponent  />
          <Route exact path="/" component={CustomSearch} />
          <Route exact path="/news" component={News} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/fame" component={Fame} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/tech" component={Tech} />
       
        </div>
      </BrowserRouter>
       
    </Provider>
    );
  }
}

export default App;
