
const fetchNews=(state={
    recentNews:[]
    }, action)=>{
        if(action.type === "FETCH_NEWS"){
            
            state= {...state, recentNews: action.payload}
        }
    
        return state;
    };
    export default fetchNews;