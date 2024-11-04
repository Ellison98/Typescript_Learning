import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();

const logger = useTypedSelector((state) => state.logger);


// interface Obj<T> {
//     name: {
//         state: {
//             data: string;
//             loading: boolean;
//         }
//     }
// }

// interface State {
//     state: {
//         data: string;
//         loading: boolean;
//     }
// }

// const obj: Obj<State> = {
//     name: {
//         state: {
//             data: "data",
//             loading: false
//         }
//     }
// }