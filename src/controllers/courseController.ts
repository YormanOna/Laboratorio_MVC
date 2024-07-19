import { Course, CourseModel } from "../models/course";

class CourseController {
    private model: CourseModel;

    constructor() {
        this.model = new CourseModel();
    }

    initialize(): Course[] {
        this.model.addCourse(new Course(1, 'Curso de Next.js', 'Aprende a crear aplicaciones con Next.js', 'Juan Pérez'));
        this.model.addCourse(new Course(2, 'Curso de TypeScript', 'Domina TypeScript para aplicaciones robustas', 'María López'));
        this.model.addCourse(new Course(3, 'Curso de React', 'Aprende a crear interfaces de usuario con React', 'Carlos Ramírez'));
        this.model.addCourse(new Course(4, 'Curso de Node.js', 'Construye aplicaciones backend con Node.js', 'Ana Martínez'));
        return this.model.getCourses();
    }
}

export default CourseController;