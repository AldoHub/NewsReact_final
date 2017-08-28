const fetchSports=(state={
    recentSports:[]
    }, action)=>{
        if(action.type === "FETCH_SPORTS"){
            
            state= {...state, recentSports: action.payload}
        }
    
        return state;
    };
    export default fetchSports;