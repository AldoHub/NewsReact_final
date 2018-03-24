import axios from "axios";

export function fetchBusiness(){
    return function(dispatch){
        axios.get("https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=d2bd4483ceb44f01ae177734f4228c4e").then(response=>{
            dispatch({type:"FETCH_BUSINESS", payload:response.data.articles});
        }).catch(err=>{
            console.log(err)
        });     
 
   }
}