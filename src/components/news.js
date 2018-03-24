import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//actions
import {fetchNews} from "../actions/fetch_news";

class News extends Component {
  
  //fetch the news, using the fetchNews Action
  //after the component is mounted
  componentDidMount=()=>{
       this.props.fetchNews();
  }

  render() {
    return (
      <div className="outer">
      <h1>Latest News (Reuters)</h1>
      <div className="news">
        
           {this.props.recentNews.map(article=>{
                return(
                  <div className="article" key={article.title}>
                    <div className="articleImg">
                       <a target="_blank" href={article.url}  rel="noopener"><img alt={article.title} src={article.urlToImage} /></a>
                    </div>
                    <div className="articleData">  
                        <p className="articleTitle">{article.title}</p>
                        <div className="meta">
                        <p>{article.author}</p>
                              <p> {article.publishedAt}</p>
                            
                        </div>
                                            
                        <p className="articleDesc"> {article.description}</p>
                        <p><a className="go" target="_blank" href={article.url}  rel="noopener">Read Note</a></p>
                        </div>
                  </div>
                )
                })}
              
      </div>
      </div>
    );
  }
}


//map the state to a property for future use
function mapStateToProps(state){
    return{
      recentNews: state.FetchNews.recentNews
    }
}

//add the action
function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchNews:fetchNews}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(News);

