import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"

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
        // builder.addCase(moviesSlice.actions.reset, () => {
        //     return []
        // })
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})

export const { addSong, removeSong } = songsSlice.actions
export const songsReducer = songsSlice.reducer