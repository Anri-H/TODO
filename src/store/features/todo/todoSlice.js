import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodoAsync } from "./addTodo";

const initialState = {
  value: [],
  status: "idle",
};

export const addTodo = createAsyncThunk(
  "todo/addTodoStatus",
  async (amount) => {
    const response = await addTodoAsync(amount);
    return response;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    edit: (state, action) => {
      // const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.value[action.payload.i].name = action.payload.name;
    },
    complete: (state, action) => {
      // const index = action.payload.index;
      state.value[action.payload].completed =
        !state.value[action.payload].completed;
    },
    remove: (state, action) => {
      // const index = state.findIndex(({id}) => id === action.payload);
      state.value.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.push(action.payload);
      });
  },
});

export const { edit, remove, complete } = todoSlice.actions;

export const todos = (state) => state.todo.value;

export default todoSlice.reducer;
