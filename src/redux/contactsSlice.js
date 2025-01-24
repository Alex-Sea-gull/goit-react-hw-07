import { createSlice } from "@reduxjs/toolkit"
import { fetchData } from "./contactsOps";

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
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },


        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
        fetchContacts(state, action) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            console.log("Дані збережені:", action.payload);
            state.items = action.payload;
            state.loading = false;
        })
            .addCase(fetchData.rejected, (state, action) => {
                console.error("Помилка при завантаженні:", action.payload);
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(fetchData.pending, (state, action) => {
                state.error = null;
                state.loading = false;
            })
    }
})


export const { addContact, deleteContact, setLoading, setError, fetchContacts } = contactSlice.actions
export const contactsReducer = contactSlice.reducer

//Selector
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;