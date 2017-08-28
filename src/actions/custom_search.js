import $ from "jquery";

export function customSearch(){
    //return the actual action to do
    return function(dispatch){


    //default values
    //will be overriden by the user inputs
   
    
    if($("#source").val()=== "zero" ){
         let $source="mtv-news";
         let $relevance ="top";   
         $.ajax({
            method: "GET",
            url: "https://newsapi.org/v1/articles?source="+ $source+"&sortBy="+ $relevance +"&apiKey=d2bd4483ceb44f01ae177734f4228c4e"
        }).then((response)=>{ 
            dispatch({type:"FETCH_CUSTOM_NEWS", payload:response.articles});
          
        });
    
    }else{
        let $source = $("#source option:selected").attr("value");
        let $relevance =$("#relevance").val();    
    
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v1/articles?source="+ $source+"&sortBy="+ $relevance +"&apiKey=d2bd4483ceb44f01ae177734f4228c4e"
        }).then((response)=>{ 
            dispatch({type:"FETCH_CUSTOM_NEWS", payload:response.articles});
       
        });
    }


   }
}