import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({ id: uuid(), title: action.payload, completed: false });
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
