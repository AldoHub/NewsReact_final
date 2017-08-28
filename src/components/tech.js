import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//actions
import {fetchTech} from "../actions/fetch_tech";

class Tech extends Component {
  
  //fetch the news, using the fetchNews Action
  //after the component is mounted
  componentDidMount=()=>{
      this.props.fetchTech();
  }

  render() {
    return (
      <div className="news">
        <h1>Latest News (The Verge)</h1>
        <div>{this.props.recentTechNews.map(article=>{
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
                      </div>
                  </div>
                )
                })}</div>
          
      </div>
    );
  }
}


function mapStateToProps(state){
    return{
      recentTechNews: state.FetchTech.recentTechNews
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchTech:fetchTech}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Tech);

