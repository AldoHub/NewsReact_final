import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import axios from "axios";


class CustomSearch extends Component {

  constructor(props){
      super(props);
      this.state= {
          arraySources : [],
          searchValue : "",
          searchRelevance: "",
          customNews: []
      }
    
  }  

  componentWillMount= () => {
    axios.get("https://newsapi.org/v1/sources?")
    .then((response)=>{
        let a = [];     
        response.data.sources.map(source =>{
          a.push(source);
        });
       this.setState({
           arraySources : a
       });
    })
    .catch(err =>{
        console.log(err);
    });
  }

  //manage the handler of the search name
  changeHandlerName(e){
    
    this.setState({
        searchValue: e.target.value
    });    
    
  }

  //manage the handler of the search relevance
  changeHandlerRelevance(e){
    
    this.setState({
        searchValue: e.target.value
    });    
   
  }

searchHandler(){
    let source = this.state.searchValue;
    let relevance = this.state.relevance;
    axios.get("https://newsapi.org/v1/articles?source="+ source+"&sortBy="+ relevance +"&apiKey=d2bd4483ceb44f01ae177734f4228c4e")
    .then(response => {
        this.setState({
            customNews: response.data.articles
        });
    })
    .catch(err => {
        console.log(err);
    });
}


  render() {
    return (
<div className="outer">   
<h1>Seach News.</h1>     
        <div className="search-form">
          <p>Select a source and a relevance to search for news </p>
           <p className="note">Some sources only have "latest" relevance news, if the server does not respond
               with a set of news for "top", try setting the relevance to "latest".</p>
        <div className="search">
           <select onChange={this.changeHandlerName.bind(this)} id="source">
               <option value="zero">Select an option...</option>
              {
                  this.state.arraySources.map(s =>{
                      return(
                        <option key={s.name} value={s.id}>{s.name}</option>
                      )
                  })
                
              }
           </select>
           <select onChange={this.changeHandlerRelevance.bind(this)} id="relevance">
               <option value="latest">Latest</option>
               <option value="top">Top</option>
            </select>
           <button id="searchButton" onClick={this.searchHandler.bind(this)}>Search </button>
        </div>
        </div>  
      <div className="news">
            {this.state.customNews.map(article=>{
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
                })}
        </div>
     
</div>
    );
  }
}



export default CustomSearch;




