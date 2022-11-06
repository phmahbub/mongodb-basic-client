import React from 'react';

const CourseObjectives = ({obj}) => {
    return (
        <div>
            <ul style={{ listStyleType: "square" }}>
                <li>{obj}</li>
            </ul>
        </div>
    );
};

export default CourseObjectives;