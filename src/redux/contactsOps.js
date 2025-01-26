import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6793d3585eae7e5c4d900514.mockapi.io"


export const fetchData = createAsyncThunk("contacts/fetchData", async (_, thunkApi) => {
    try {
        const { data } = await axios.get("/contacts");
        console.log("Данні API:", data);
        return data
    } catch (error) {
        console.error("Помилка при запиті:", error.message);
        return thunkApi.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data
    } catch (error) {
        console.error("Помилка при запиті:", error.message);
        return thunkApi.rejectWithValue(error.message)
    }
});



// Зворотні кавички ALT 96