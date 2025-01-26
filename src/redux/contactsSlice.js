import { createSlice } from "@reduxjs/toolkit"
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
        builder.addCase(fetchDataThunk.fulfilled, (state, action) => {
            console.log("Дані збережені:", action.payload);
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        })
            .addCase(fetchDataThunk.rejected, (state, action) => {
                console.error("Помилка при завантаженні:", action.payload);
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(fetchDataThunk.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                console.log("Запис видалено:", action.payload);
                state.items = state.items.filter(item => item.id !== action.payload.id)
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                console.log("Контакт додано:", action.payload);
                state.items = [...state.items, action.payload];
            })
    }
})


export const { addContact, setLoading, setError, fetchContacts } = contactSlice.actions
export const contactsReducer = contactSlice.reducer

//Selector
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;