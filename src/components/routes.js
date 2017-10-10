import React, { Component } from 'react';


// components
import News from "./news";
import Business from "./business";
import Games from "./games";
import Fame from "./fame";
import Tech from "./tech";
import Sports from "./sports";
import CustomSearch from "./customSearch";

//react router
import {Route} from "react-router-dom";


class Routes extends Component {


  render() {
  
    return (
  
          <div>
            <Route exact path="/" component={CustomSearch} />
            <Route exact path="/news" component={News} />
            <Route exact path="/business" component={Business} />
            <Route exact path="/fame" component={Fame} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/tech" component={Tech} />
          </div>

  
    );
  }
}

export default Routes;
