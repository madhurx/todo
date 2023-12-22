import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTaskAction = createAsyncThunk('addTask', async (payload) => {
    try {
      console.log(payload);
      const response = await axios.post('http://localhost:5000/api/add', payload);
      return response.data;
    } catch (error) {
      console.error('An error occurred while adding a task:', error);
      throw error;
    }
  });
