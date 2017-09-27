import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//actions
import {fetchBusiness} from "../actions/fetch_business";


class Business extends Component {
  componentDidMount=()=>{
      this.props.fetchBusiness();
  }
 
  render() {
    return (
  <div className="outer">
    <h1>Latest News (Business Insider)</h1>
      <div className="news">
        
        <div>{this.props.businessNews.map(article=>{
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
      businessNews: state.FetchBusiness.recentBusinessNews
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchBusiness:fetchBusiness}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Business);


