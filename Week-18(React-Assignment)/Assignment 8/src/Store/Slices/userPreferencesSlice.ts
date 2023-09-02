import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserPreferences {
  category: string;
  priceRange: string;
}

const initialState: UserPreferences = {
  category: "",
  priceRange: "",
};

const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    updateUserPreferences: (state, action: PayloadAction<UserPreferences>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserPreferences } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
