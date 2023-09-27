import { configureStore } from '@reduxjs/toolkit'
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";


const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
})

const startingState = store.getState()
console.log(JSON.stringify(startingState));

store.dispatch(addSong('NEW SONG'))

const finalState = store.getState()
console.log(JSON.stringify(finalState));


export { store }

export {addMovie, removeMovie, addSong, removeSong, reset } 
