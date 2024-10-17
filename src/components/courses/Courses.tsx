import { FC } from 'react';
import { CoursesPropsType } from '../../types/types';
import CourseCard from '../cards/CourseCard';

const Courses: FC<CoursesPropsType> = ({ courses }) => {
    return (
        <>
            {courses.length ? (
                <div className="courses">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <h3>No courses</h3>
            )}
        </>
    );
}

export default Courses;
