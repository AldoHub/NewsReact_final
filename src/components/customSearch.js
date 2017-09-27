import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//actions
import {customSearch} from "../actions/custom_search";

//other
import $ from "jquery";



class CustomSearch extends Component {
  componentDidMount=()=>{
    
    $(window).on("load", ()=>{
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v1/sources?"
        }).then((response)=>{
            //get the ids of all the sources in the api
            //would need to loop to get the Id of the sources
            
            let $sources= response.sources;
            $sources.forEach(function(source) {
                $("#source").append("<option value='"+ source.id  +"'>"+  source.name +"</option>"); 
            }, this);
                

        });
         
    });
    
    
    
    //add the event click
    //and bind the action to it  
    $("body").on("click", "#searchButton", ()=>{
       
        this.props.CustomSearch();
       
    });
    
  }
 
  render() {
    return (
<div className="outer">   
<h1>Seach News.</h1>     
<p>Select a source and a relevance to search for news </p>
        <div>
           <p className="note">Some sources only have "latest" relevance news, if the server does not respond
               with a set of news for "top", try setting the relevance to "latest".</p>
        <div className="search">
           <select id="source">
               <option value="zero">Select an option...</option>
           </select>
           <select id="relevance">
               <option value="latest">Latest</option>
               <option value="top">Top</option>
            </select>
           <button id="searchButton">Search </button>
        </div>
      <div className="news">
             
            <div>{this.props.customNews.map(article=>{
                return(
                  <div className="article" key={article.title}>
                    <div className="articleImg">
                       <a target="_blank" href={article.url}><img alt={article.title} src={article.urlToImage} /></a>
                    </div>
                    <div className="articleData">  
                        <p className="articleTitle">{article.title}</p>
                        <div className="meta">
                        <p>{article.author}</p>
                              <p> {article.publishedAt}</p>
                            
                        </div>
                                            
                        <p className="articleDesc"> {article.description}</p>
                        <p><a className="go" target="_blank" href={article.url}>Read Note</a></p>
                        </div>
                  </div>
                )
                })}</div>
        </div>
      </div>
</div>
    );
  }
}


function mapStateToProps(state){
    return{
     customNews: state.CustomSearch.customNews
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({CustomSearch:customSearch}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CustomSearch);




