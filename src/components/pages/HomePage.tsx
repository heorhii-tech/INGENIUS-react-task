import { FC } from "react";
import { useFetchCourses } from "../hooks/useFetchCourses";
import Courses from "../courses/Courses";
import useSearch from "../hooks/useSerach";
import Search from "../search/Search";

const HomePage: FC = () => {
  //take all courses
  const { courses } = useFetchCourses();
  //take filtered courses
  const { filteredCourses, handleSearchChange } = useSearch(courses);

  return (
    <div className="home_page">
      <Search onChangeFunc={handleSearchChange} placeHolder={`find a course`} />
      <Courses courses={filteredCourses} />
    </div>
  );
};

export default HomePage;
