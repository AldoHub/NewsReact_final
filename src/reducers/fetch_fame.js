const fetchFame=(state={
    recentFameNews:[]
    }, action)=>{
        if(action.type === "FETCH_FAME"){
            
            state= {...state, recentFameNews: action.payload}
        }
    
        return state;
    };
    export default fetchFame;