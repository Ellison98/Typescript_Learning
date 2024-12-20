import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types";

type TModalState = {
    boradId: string;
    listId: string;
    task: ITask;
}

const initialState: TModalState = {
    boradId: "board-0",
    listId: "list-0",
    task: {
        taskId: "task-0",
        taskName: "task 0",
        taskDescription: "task description",
        taskOwner: "IM",
    }
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {

    }
});

export const modalReducer = modalSlice.reducer;