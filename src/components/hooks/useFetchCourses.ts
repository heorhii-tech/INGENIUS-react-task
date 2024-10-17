import { useEffect } from "react";
import { fetchCourses } from "../../../src/store/courses/thunks";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

// req data from DB
export const useFetchCourses = () => {
  const dispatch = useAppDispatch();
  const { loading, error, courses } = useAppSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses()); //set data to the store 
  }, []);
  return { loading, error, courses };
};
