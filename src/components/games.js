import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//actions
import {fetchGames} from "../actions/fetch_games";


class Games extends Component {
  componentDidMount=()=>{
      this.props.fetchGames();
  }

  render() {
    return (
      <div className="outer">
      <h1>Latest News (Polygon)</h1>
      <div className="news">
      
       {this.props.recentGamesNews.map(article=>{
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

function mapStateToProps(state){
  return{
    recentGamesNews: state.FetchGames.recentGamesNews
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchGames:fetchGames}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Games);




