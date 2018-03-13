import axios from "axios";

export function fetchNews(){
        return function(dispatch){
            axios.get("https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=d2bd4483ceb44f01ae177734f4228c4e").
            then(response=>{
                dispatch({type:"FETCH_NEWS", payload:response.data.articles});
            }).catch(err=>{
                console.log(err)
            });     
     
       }
 
   
}