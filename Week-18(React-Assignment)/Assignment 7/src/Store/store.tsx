import { legacy_createStore as createStore } from "redux";

// Initial state
const initialState: any = {
  data: [],
};

// Reducer function
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DELETE_TODO":
      const updatedTodo = state.data.filter(
        (item: any) => item !== action.payload
      );
      return {
        ...state,
        data: updatedTodo,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
