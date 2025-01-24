import { createSlice } from "@reduxjs/toolkit"

// Масив для зберігання контактів
const initialState = {
    contacts: {
        items: [],
        loading: false,
        error: null
    },
}


//slice
const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
        },


        setLoading(state, action) {
            state.contacts.loading = action.payload
        },
        setError(state, action) {
            state.contacts.error = action.payload
        },
        fetchContacts(state, action) {
            state.contacts.items = action.payload
        },
    }
})


export const { addContact, deleteContact, setLoading, setError, fetchContacts } = contactSlice.actions
export const contactsReducer = contactSlice.reducer

//Selector
export const selectContacts = (state) => state.contacts.items;