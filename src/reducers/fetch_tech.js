const fetchTech=(state={
    recentTechNews:[]
    }, action)=>{
        if(action.type === "FETCH_TECH"){
            
            state= {...state, recentTechNews: action.payload}
        }
    
        return state;
    };
    export default fetchTech;