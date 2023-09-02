import { configureStore } from "@reduxjs/toolkit";
import userPreferencesReducer from "./Slices/userPreferencesSlice";
import recommendedGiftsReducer from "./Slices/recommendedGiftsSlice";

const store = configureStore({
  reducer: {
    userPreferences: userPreferencesReducer,
    recommendedGifts: recommendedGiftsReducer,
  },
});

export default store;
