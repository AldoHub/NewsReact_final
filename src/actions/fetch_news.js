import $ from "jquery";

export function fetchNews(){
    //return the actual action to do
    return function(dispatch){
       
       
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=d2bd4483ceb44f01ae177734f4228c4e"
        }).then((response)=>{
            dispatch({type:"FETCH_NEWS", payload:response.articles});
           
        });
 
   }
}