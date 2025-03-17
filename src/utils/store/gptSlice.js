import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch:false,
        movieTitles:[],
        movieResults:[]
    },
    reducers:{
        toggleGptSearchView:(state) =>{
            state.showGptSearch  = !state.showGptSearch
        },
        addMovieResults:(state,action) => {
            state.movieTitles = action.payload.gptMoviesTitles
            state.movieResults = action.payload.tmdbResults
        },
        clearGptResults:(state) => {
            state.movieResults = [],
            state.movieTitles = []
        }
    }
})

export const {toggleGptSearchView,addMovieResults,clearGptResults} = gptSearchSlice.actions;
export default gptSearchSlice.reducer