import React from 'react';

const Course = ({ course }) => {
    const { title, thumb, enrolled, duration, ratings, price, details } = course
    return (
        <article className="flex flex-col dark:bg-gray-900 text-white rounded shadow-lg">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={thumb} />
            </a>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{title}</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{details?.slice(0, 50)}</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-red-400">
                    <span>{ratings}</span>
                    <span>{enrolled} views</span>
                </div>
            </div>
        </article>
    );
};

export default Course;