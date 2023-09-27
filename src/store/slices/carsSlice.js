import { createSlice, nanoid } from "@reduxjs/toolkit";



const carsSlice = createSlice({
    name: 'cars',
    imitialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            //action.payload === {name: 'car name', cost: 999}
            state.cars.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost,
            }) 
        },
        removeCar(state, action) {
            // action.payload === id of the car we want to remove
            const updated = state.cars.filer(car => car.id !== action.payload)
            state.cars = updated
        },
    }
})

export const {changeSearchTerm, addCar, removeCar} = formSlice.actions
export const carsReducer = formSlice.reducer
