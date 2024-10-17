import { FC } from "react";
import Lesson from "./Lesson";
import useLessons from "../hooks/useLessons";
import Navigation from "../nav/Navigation";

const Lessons: FC = () => {
  const { currentModule, courseId } = useLessons();

  if (!currentModule) {
    return <div>Lessons not found</div>;
  }
  return (
    <>
      <Navigation courseId={courseId} />
      <div className="lessons">
        {currentModule.lessons?.map((lesson, index) => {
          return <Lesson key={index} lesson={lesson} />;
        })}
      </div>
    </>
  );
};

export default Lessons;
