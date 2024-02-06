import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState:{
        searchTerm: '',
        cars: [],
    },

    reducers: {
        changeSearchTerm(state, action){
           state.searchTerm = action.payload;
        },
        addCar(state, action){
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeCar(state, action){
            const updateCar = state.cars.filter((car) => {
                return car.id !== action.payload
            });

            state.cars = updateCar;
        },
     },
})

export const { changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducers = carsSlice.reducer;