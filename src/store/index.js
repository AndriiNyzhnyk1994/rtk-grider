import {configureStore, createSlice} from '@reduxjs/toolkit'

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
            //
        },
    }
})


const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
})


const startingState = store.getState()
console.log(JSON.stringify(startingState));

store.dispatch(songsSlice.actions.addSong('NEW SONG'))

const finalState = store.getState()
console.log(JSON.stringify(finalState));

export {store}
export const {addSong} = songsSlice.actions