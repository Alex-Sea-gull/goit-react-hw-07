import { createSlice } from "@reduxjs/toolkit"

// Масив для зберігання контактів
const initialState = {
    name: ""
}

//slice
const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    }
})

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

//Selector
export const filterContacts = (state) => state.filters.name;