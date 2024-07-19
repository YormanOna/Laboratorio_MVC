import React, { useEffect, useState } from 'react';
import CourseView from '../views/courseView';
import CourseController from '../controllers/courseController';
import { Course } from '../models/course';

const CoursesPage: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const controller = new CourseController();

    useEffect(() => {
        const coursesData = controller.initialize();
        setCourses(coursesData);
    }, []);

    return (
        <div>
            <h1>Lista de Cursos</h1>
            <CourseView courses={courses} />
        </div>
    );
};

export default CoursesPage;