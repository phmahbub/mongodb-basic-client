import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import NewNavBar from '../Components/Header/NewNavBar';
import Home from '../Components/Home/Home';
export const CourseContext = createContext([])
const Root = () => {
    const courses = useLoaderData()
    // console.log(courses)
    return (
        <CourseContext.Provider value={courses}>
            <div className='bg-white'>
                <NewNavBar/>
                <Outlet/>
                <Footer/>
            </div>
        </CourseContext.Provider>
    );
};

export default Root;