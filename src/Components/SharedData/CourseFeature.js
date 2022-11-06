import React from 'react';

const CourseFeature = ({feature}) => {
    return (
        <div>
            <ul style={{ listStyleType: "disc" }}>
                <li>{feature}</li>
            </ul>
        </div>
    );
};

export default CourseFeature;