import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Utilities/Button';

const LeftSideData = ({course}) => {
    const navigate = useNavigate()
    const handleClick =()=> {
        console.log(course.id)
        navigate(`/courses/${course.id}`)
    }

    return (
        <div>
            <ul>
            <li className="w-full"><button
            onClick={handleClick}
            className='bg-gray-700 text-white hover:bg-orange-500 p-10 w-full rounded text-xl font-semibold mt-5 ' >{course.title}</button></li>
            </ul>
        </div>
    );
};

export default LeftSideData;