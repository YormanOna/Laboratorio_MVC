
// views/courseView.tsx

import React from 'react';
import { Course } from '../models/course';

interface CourseViewProps {
    courses: Course[];
}

const CourseView: React.FC<CourseViewProps> = ({ courses }) => {
    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    <p>{course.description}</p>
                    <p>Instructor: {course.instructor}</p>
                </div>
            ))}
        </div>
    );
};

export default CourseView;