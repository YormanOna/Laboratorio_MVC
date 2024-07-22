import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Bienvenido a la Plataforma de Cursos</h1>
            <Link href="/courses">
                Ver Cursos
            </Link>
            <br />
            <Link href="/addCourses">
                Agregar Curso
            </Link>
            <br />
            <Link href="/enrollCourse">
                Inscribirse a un Curso
            </Link>
            <br />
            <Link href="/courseDetails">
                Detalles del Curso
            </Link>
        </div>
    );
};

export default HomePage;