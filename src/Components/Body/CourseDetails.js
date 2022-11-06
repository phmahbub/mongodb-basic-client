import React from 'react';
import ReactDOM from "react-dom";

import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CourseFeature from '../SharedData/CourseFeature';
import CourseObjectives from '../SharedData/CourseObjectives';
import CourseOutline from '../SharedData/CourseOutline';
import Instructor from '../SharedData/Instructor';

import { BsFilePdf } from "react-icons/bs";

const ref = React.createRef();

const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [8.5, 14]
};

export default function CourseDetails() {
    const navigate = useNavigate()
    const courseData = useLoaderData()
    const { uid, title, instructor, objective, details, duration, enrolled, outline, price, ratings, speciality, thumb, sort_des } = courseData
    // console.log(courseData)

    const handleClick = () => {
        console.log(uid)
        navigate(`/courses/checkout/${uid}`)
    }



    return (
        <div className=' px-4 pt-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8  '>
            <div className=' bg-gray-700  py-6 mb-3 rounded grid md:grid-cols-12 grid-cols-8 '>
                <p className='text-center text-4xl text-orange-500 font-bold md:col-span-10 col-span-6'>Course Details</p>
                <div className='col-span-2 md:col-span-2'>
                   
                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-8 ' ref={ref}>

                <div className=' md:col-span-5 col-span-8 text-center md:mb-0 mb-3'>
                    <div className=' px-6  mb-2 rounded '>
                        <p className='text-center text-3xl text-cyan-700 font-bold mb-4'>{title}</p>
                        <p className='text-justify text-lg font-semibold mb-5'>{sort_des}</p>
                    </div>
                    <div className=' px-6  mb-3 rounded border border-slate-200 '>
                        <p className='text-center text-2xl font-bold'>Instructor</p>
                        <div className=''>
                            {
                                instructor.map(tutor => <Instructor tutor={tutor} />)
                            }
                        </div>
                    </div>
                    <div className=' px-6  mb-3 rounded border border-slate-200'>
                        <p className='text-left text-2xl font-bold'>What You Will Learn From This Course: </p>
                        <div className='text-left pl-8 text-xl'>
                            {
                                outline.map(coutline => <CourseOutline key={coutline} coutline={coutline} />)
                            }
                        </div>
                    </div>
                    <div className=' px-6  mb-3 rounded border border-slate-200'>
                        <p className='text-left text-2xl font-bold'>About The Course: </p>
                        <div className='text-justify pl-8 text-xl'>
                            {
                                details
                            }
                        </div>
                    </div>
                    <div className=' px-6  mb-3 rounded border border-slate-200'>
                        <p className='text-left text-2xl font-bold'>Why This Course? </p>
                        <div className='text-left pl-8 text-xl'>
                            {
                                speciality.map(feature => <CourseFeature key={feature} feature={feature} />)
                            }
                        </div>
                    </div>
                    <div className=' px-6  mb-3 rounded border border-slate-200'>
                        <p className='text-left text-2xl font-bold'>What You Will Get From This Course? </p>
                        <div className='text-left pl-8 text-xl'>
                            {
                                objective.map(obj => <CourseObjectives key={obj} obj={obj} />)
                            }
                        </div>
                    </div>
                </div>



                <div className='md:col-span-3 col-span-8 text-center ml-5  mb-3'>

                    <div className="px-2 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-10">
                        <div className="relative mb-3 sm:mx-auto md:mb-4 md:max-w-md lg:max-w-lg">
                            <img
                                className=" w-full h-80 rounded shadow-lg "
                                src={thumb}
                                alt=""
                            />
                            <a
                                href="/"
                                aria-label="Play Video"
                                className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                            >

                            </a>
                        </div>
                        <div className="mb-5 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                            <div className='flex justify-between items-center mb-5'>
                                <p className='text-sm text-purple-300'>Enrolled: {enrolled}</p>
                                <p className='text-sm text-purple-300'>Course Duration: {duration}h</p>
                                <p className='text-sm text-purple-300'>Price: {price}$</p>
                                <p className='text-sm text-yellow-500'><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon>{ratings}</p>

                            </div>


                            <p className="mb-5 text-base text-gray-700 md:text-lg text-justify">
                                {sort_des}
                            </p>
                            <div className=" grid grid-cols-2 gap-3 items-center justify-center">
                                <Link
                                    to="/courses"
                                    className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none  w-50 col-1"
                                >
                                    Back to All Courses
                                </Link>
                                <button
                                    onClick={handleClick}
                                    className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-cyan-400 hover:bg-cyan-700 focus:shadow-outline focus:outline-none  w-50 col-1" >Get Premium Access</button>

                            </div>
                        </div>
                    </div>




                </div>



            </div>
        </div>
    );
};


