import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//actions
import {fetchFame} from "../actions/fetch_fame";


class Fame extends Component {
  componentDidMount=()=>{
    this.props.fetchFame();
  }
 
  render() {
    return (
      <div className="outer">
          <h1>Latest News (MTV News)</h1>
      <div className="news">
      
        <div>{this.props.fameNews.map(article=>{
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
      fameNews: state.FetchFame.recentFameNews
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchFame:fetchFame}, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(Fame);


