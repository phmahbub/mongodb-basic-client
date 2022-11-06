import React from 'react';

const CourseOutline = ({coutline}) => {
    // console.log(coutline)
    return (
        <div>
            <ul style={{listStyleType:"disc"}}>
            <li>{coutline}</li>
            </ul>
        </div>
    );
};

export default CourseOutline;