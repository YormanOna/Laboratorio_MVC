import React from 'react';
import { Course } from '../models/course';
import Link from 'next/link';
import CourseController from '../controllers/courseController';

interface CourseViewProps {
    courses: Course[];
    onDelete: (id: number) => void;
}

const CourseView: React.FC<CourseViewProps> = ({ courses, onDelete }) => {
    if (!courses || courses.length === 0) {
        return <div>No hay cursos disponibles.</div>;
    }

    const handleDelete = (id: number) => {
        onDelete(id);
    };

    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    <p>{course.description}</p>
                    <p>Instructor: {course.instructor}</p>
                    <Link href={`/editCourse?id=${course.id}`} legacyBehavior>
                        <a>Editar</a>
                    </Link>
                    <button onClick={() => handleDelete(course.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CourseView;
