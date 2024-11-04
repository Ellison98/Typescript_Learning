import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];
}

const initialState: TBoardState = {
    modalActive: false,
    boardArray: [
        {
            boardId: "board-0",
            boardName: "첫 번째 게시물",
            lists: [
                {
                    listId: 'list-0',
                    listName: 'List 0',
                    tasks: [
                        {
                            taskId: 'task-0',
                            taskName: 'Task 0',
                            taskDescription: 'Task 0 Description',
                            taskOwner: 'IM',
                        },
                        {
                            taskId: 'task-1',
                            taskName: 'Task 1',
                            taskDescription: 'Task 1 Description',
                            taskOwner: 'SEONG',
                        }
                    ]
                },
                {
                    listId: 'list-1',
                    listName: 'List 1',
                    tasks: [
                        {
                            taskId: 'task-2',
                            taskName: 'Task 2',
                            taskDescription: 'Task 2 Description',
                            taskOwner: 'IM',
                        },
                        {
                            taskId: 'task-3',
                            taskName: 'Task 3',
                            taskDescription: 'Task 3 Description',
                            taskOwner: 'SEONG',
                        }
                    ]
                }
            ]
        }
    ],
};

const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {

    }
});

export const boardsReducer = boardSlice.reducer;