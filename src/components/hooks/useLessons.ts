import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

const useLessons = () => {
  const { id: courseId, module: moduleTitle } = useParams<{
    module: string;
    id: string;
  }>();

  // take all courses from redux state
  const { courses } = useAppSelector((state) => state.courses);
  const currentCourse = courses.find(
    (course) => course.id === Number(courseId)
  );
  // find current course
  const currentModule = currentCourse?.modules.find(
    (module) => module.title === moduleTitle
  );
  return { currentModule, courseId };
};
export default useLessons;
