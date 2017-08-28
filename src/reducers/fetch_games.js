const fetchGames=(state={
    recentGamesNews:[]
    }, action)=>{
        if(action.type === "FETCH_GAMES"){
            
            state= {...state, recentGamesNews: action.payload}
        }
    
        return state;
    };
    export default fetchGames;