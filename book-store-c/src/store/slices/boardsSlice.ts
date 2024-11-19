import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "first",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "task1",
              taskDescription: "des1",
              taskOwner: "kim",
            },
            {
              taskId: "task-0",
              taskName: "task1",
              taskDescription: "des1",
              taskOwner: "kim",
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});

export const boardsRuducer = boardsSlice.reducer;
