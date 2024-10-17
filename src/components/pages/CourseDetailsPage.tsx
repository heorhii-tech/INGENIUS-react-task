import { FC } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { useParams } from "react-router-dom";
import CourseDetails from "../courses/CourseDetails";
import Navigation from "../nav/Navigation";

const CourseDetailsPage: FC = () => {
  // take all courses from redux state
  const { courses } = useAppSelector((state) => state.courses);
  // take id of current course from useParams
  const { id } = useParams<{ id: string }>();
  // find current course in all courses
  const filteredCourses = courses.filter((course) => course.id === Number(id));

  if (filteredCourses.length === 0) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <Navigation />
      {filteredCourses.map((course) => (
        <CourseDetails key={course.id} course={course} />
      ))}
    </>
  );
};

export default CourseDetailsPage;
