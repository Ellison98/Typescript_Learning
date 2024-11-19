import { boardsRuducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

const reducer = {
  logger: loggerReducer,
  boards: boardsRuducer,
  modal: modalReducer,
};

export default reducer;
