import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseType } from "../../types/types";
import { SLICE } from "./constatnts";

export const fetchCourses = createAsyncThunk<
  CourseType[],
  void,
  { rejectValue: string }
>(`${SLICE}/fetchCourses`, async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("/courses.json");

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }
    const data: CourseType[] = await res.json();

    return data;
  } catch (eror) {
    return rejectWithValue(`Error loading courses`);
  }
});
