import {combineReducers} from "redux";
import fetchNews from "../reducers/fetch_news";
import fetchBusiness from "../reducers/fetch_business";
import fetchGames from "../reducers/fetch_games";
import fetchFame from "../reducers/fetch_fame";
import fetchTech from "../reducers/fetch_tech";
import fetchSports from "../reducers/fetch_sports";
import customSearch from "../reducers/custom_search";


//combine reducers
//remember you need to export the reducers to use them
const reducers= combineReducers({
    FetchNews: fetchNews,
    FetchBusiness: fetchBusiness,
    FetchGames: fetchGames,
    FetchFame: fetchFame,
    FetchTech: fetchTech,
    FetchSports:fetchSports,
    CustomSearch: customSearch
});

export default reducers;