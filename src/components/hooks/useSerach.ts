import { useState } from "react";
import { useFetchCourses } from "./useFetchCourses";
import { CourseType } from "../../types/types";

const useSearch = (courses: CourseType[]) => {
  const [searchTerm, setSearchTerm] = useState(""); // Create a state for the search query

  // Filter courses by title or description
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Input field change handler

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target && event.target.value);
  };
  return { filteredCourses, handleSearchChange };
};
export default useSearch;
