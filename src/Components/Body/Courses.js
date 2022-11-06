import React, { useContext } from 'react';
import { CourseContext } from '../../Root/Root';
import Course from './Course';
import LeftSideData from '../SharedData/LeftSideData';
import RightSideData from '../SharedData/RightSideData';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const courses = useContext(CourseContext)
    
    // console.log(courses)
    return (
    
    <div className='grid grid-cols-1 md:grid-cols-6   md:px-2  mx-8'>
            <div className='col-span-6 text-center text-5xl text-orange-700 bg-cyan-100 px-6 py-6 mb-3 rounded font-bold'>
                All the courses
            </div>
            <div className=' md:col-span-1 col-span-6 text-center md:mb-0 mb-3'>
                {
                    courses.map(course=><LeftSideData key={course.id} course={course}/>)    
                }
            </div>
            <div className='col-span-6 md:col-span-5  text-center ml-8 '>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {
                        courses.map(course=><RightSideData key={course.id} course={course}/>)    
                    }   
               </div>
            </div>
    </div>
    );
};

export default Courses;