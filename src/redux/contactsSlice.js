import { createSelector, createSlice } from "@reduxjs/toolkit"
import { addContactThunk, deleteContactThunk, fetchDataThunk } from "./contactsOps";

// Масив для зберігання контактів
const initialState = {
    items: [],
    loading: false,
    error: null
}


//slice
const contactSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
        builder
            // Обробка fetchDataThunk
            .addCase(fetchDataThunk.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchDataThunk.fulfilled, (state, action) => {
                console.log("Дані збережені:", action.payload);
                state.items = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchDataThunk.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })


            // Обробка deleteContactThunk
            .addCase(deleteContactThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                console.log("Запис видалено:", action.payload);
                state.items = state.items.filter(item => item.id !== action.payload.id)
                state.loading = false;
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            // Обробка addContactThunk

            .addCase(addContactThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                console.log("Контакт додано:", action.payload);
                state.items = [...state.items, action.payload];
                state.loading = false;
            })
            .addCase(addContactThunk.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
})


export const contactsReducer = contactSlice.reducer

//Selector
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, (state) => state.filters.name], // Залежності: контакти та фільтр
    (contacts, filter) => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);