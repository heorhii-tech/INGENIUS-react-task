import  { FC } from 'react';
import { CoursePropsType } from '../../types/types';
import ModuleCard from '../cards/ModuleCard';


const CourseDetails:FC<CoursePropsType> =({course})=>{

    if(course.modules.length===0)return <div>No modules</div>
    return(
        <div className='modules'>
        {course.modules.map((module,index)=>{
            return <ModuleCard key={index} linkTitle='Open lessons' data={module} courseId={course.id} />
        })}
        </div>
    )
}

export default CourseDetails;