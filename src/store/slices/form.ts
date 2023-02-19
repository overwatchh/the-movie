import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
type SearchMovieQuery = {
  query: string;
};
interface FormSate {
  searchMovie: SearchMovieQuery;
}

// Define the initial state using that type
const initialState: FormSate = {
  searchMovie: {
    query: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    submitSearchMovie: (state, action: PayloadAction<SearchMovieQuery>) => {
      state.searchMovie = action.payload;
    },
  },
});

export const { submitSearchMovie } = formSlice.actions;
export default formSlice.reducer;
