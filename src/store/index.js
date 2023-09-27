import { configureStore, createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            //action.payload === string, the movie we want to remove
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
        reset(state, action) {
            return []
        }
    }
})

const songsSlice = createSlice({
    // slice:
    //   1   creates a set of 'action-creator' functions for us
    //   2   defines some initial state
    //   3   combines 'mini-reducers' into a big reducer

    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            //action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase('movie/reset', () => {
            return []
        })
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer,
    }
})


const startingState = store.getState()
console.log(JSON.stringify(startingState));

store.dispatch(songsSlice.actions.addSong('NEW SONG'))

const finalState = store.getState()
console.log(JSON.stringify(finalState));


export { store }
export const { addSong, removeSong } = songsSlice.actions
export const { addMovie, removeMovie, reset } = moviesSlice.actions