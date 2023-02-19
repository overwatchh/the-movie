import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewType } from "@/types/display";

// Define a type for the slice state
interface DisplaySate {
  view: ViewType;
}

// Define the initial state using that type
const initialState: DisplaySate = {
  view: ViewType.list,
};

export const displaySlice = createSlice({
  name: "display",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeViewType: (state, action: PayloadAction<ViewType>) => {
      state.view = action.payload;
    },
  },
});

export const { changeViewType } = displaySlice.actions;
export default displaySlice.reducer;
