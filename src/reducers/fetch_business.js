const fetchBusiness=(state={
    recentBusinessNews:[]
    }, action)=>{
        if(action.type === "FETCH_BUSINESS"){
            
            state= {...state, recentBusinessNews: action.payload}
        }
    
        return state;
    };
    export default fetchBusiness;