import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6793d3585eae7e5c4d900514.mockapi.io"


export const fetchDataThunk = createAsyncThunk("contacts/fetchDataThunk", async (_, thunkApi) => {
    try {
        const { data } = await axios.get("/contacts");
        console.log("Данні API:", data);
        return data
    } catch (error) {
        console.error("Помилка при запиті:", error.message);
        return thunkApi.rejectWithValue(error.message)
    }
});

export const deleteContactThunk = createAsyncThunk("contacts/deleteContactThunk", async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data
    } catch (error) {
        console.error("Помилка при видаленні контакту:", error.message);
        return thunkApi.rejectWithValue(error.message)
    }
});

export const addContactThunk = createAsyncThunk("contacts/addContactThunk", async (body, thunkApi) => {
    try {
        const { data } = await axios.post("/contacts", body);
        return data
    } catch (error) {
        console.error("Помилка при додаванні контакту:", error.message);
        return thunkApi.rejectWithValue(error.message)
    }
});



// Зворотні кавички ALT 096