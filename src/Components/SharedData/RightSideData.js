import React from 'react';
import { useNavigate } from 'react-router-dom';

const RightSideData = ({ course }) => {
    const { title, thumb, enrolled, duration, ratings, price, details } = course
    const navigate = useNavigate()
    const handleClick = () => {
        console.log(course.id)
        navigate(`/courses/${course.id}`)
    }

    return (
        <div>
            <article className="flex flex-col dark:bg-gray-300 text-gray-700 rounded shadow-lg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-fit w-full h-96 dark:bg-gray-500" src={thumb} />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <a rel="noopener noreferrer" href="#" className="text-xl tracking-wider uppercase hover:underline dark:text-cyan-800 font-bold">{title}</a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{details?.slice(0, 30)+'...'}</h3>
                    <div className="flex flex-wrap justify-between py-3 space-x-2 text-md dark:text-gray-600 font-semibold">
                        <span>Ratings: {ratings}</span>
                        <span>{enrolled} enrolled</span>
                        <span className='bg-orange-300 p-2 rounded font-bold'>Course Price: {price} Tk</span>
                    </div>
                    <button
                        onClick={handleClick}
                        className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-cyan-900 hover:bg-orange-500 focus:shadow-outline focus:outline-none  w-full col-1" >{course.title}</button>
                </div>
            </article>
        </div>
    );
};

export default RightSideData;