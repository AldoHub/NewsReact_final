import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//actions
import {fetchSports} from "../actions/fetch_sports";


class Sports extends Component {
  componentDidMount=()=>{
      this.props.fetchSports();
  }
 
  render() {
    return (
      <div className="outer">
         <h1>Latest News (ESPN)</h1>
      <div className="news">
       
        <div>{this.props.sportsNews.map(article=>{
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
    );
  }
}


function mapStateToProps(state){
    return{
     sportsNews: state.FetchSports.recentSports
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchSports:fetchSports}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Sports);


