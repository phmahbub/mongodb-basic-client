import React from 'react';


const DataLoader = async() => {
    const courseData = await fetch('https://b610-lerning-platform-server-side-phmahbub-phmahbub.vercel.app/courses')
    const courses = await courseData.json()

    return courses
};

export default DataLoader;