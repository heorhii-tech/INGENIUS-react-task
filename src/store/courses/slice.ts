import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCourses } from "./thunks";
import { CourseType, CoursesState } from "../../types/types";
import { SLICE } from "./constatnts";

const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCourses.fulfilled,
        (state, action: PayloadAction<CourseType[]>) => {
          state.courses = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default coursesSlice.reducer;
