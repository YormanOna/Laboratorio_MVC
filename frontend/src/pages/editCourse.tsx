// pages/editCourse.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CourseController from '../controllers/courseController';
import { Course } from '../models/course';

const EditCoursePage: React.FC = () => {
    const [course, setCourse] = useState<Course | null>(null);
    const controller = new CourseController();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchCourse() {
            const courses = await controller.initialize();
            const courseToEdit = courses.find((course) => course.id === parseInt(id as string));
            if (courseToEdit) {
                setCourse(courseToEdit);
            }
        }
        if (id) {
            fetchCourse();
        }
    }, [id]);

    const handleUpdateCourse = async (updatedCourse: Course) => {
        await controller.updateCourse(updatedCourse);
        router.push('/courses');
    };

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Editar Curso</h1>
            <CourseForm course={course} onSubmit={handleUpdateCourse} />
        </div>
    );
};

interface CourseFormProps {
    course: Course;
    onSubmit: (course: Course) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ course, onSubmit }) => {
    const [name, setName] = useState(course.name);
    const [description, setDescription] = useState(course.description);
    const [instructor, setInstructor] = useState(course.instructor);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ ...course, name, description, instructor });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre del Curso:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Instructor:</label>
                <input
                    type="text"
                    value={instructor}
                    onChange={(e) => setInstructor(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Actualizar Curso</button>
        </form>
    );
};

export default EditCoursePage;
