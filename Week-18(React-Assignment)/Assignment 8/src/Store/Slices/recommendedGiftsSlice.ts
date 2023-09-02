import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Gift {
  id: number;
  name: string;
}

interface RecommendedGiftsState {
  recommendations: Gift[];
  loading: boolean;
  error: string | null;
}

const fetchRecommendedGifts = createAsyncThunk(
  "recommendedGifts/fetchRecommendedGifts",
  async (userPreferences: any, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `/api/recommendations?category=${userPreferences.category}&priceRange=${userPreferences.priceRange}`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: RecommendedGiftsState = {
  recommendations: [],
  loading: false,
  error: null,
};

const recommendedGiftsSlice = createSlice({
  name: "recommendedGifts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedGifts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendedGifts.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendations = action.payload;
      })
      .addCase(fetchRecommendedGifts.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { fetchRecommendedGifts };
export default recommendedGiftsSlice.reducer;
