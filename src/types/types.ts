export interface CourseType {
  id: number;
  title: string;
  description: string;
  modules: Module[];
  img: string;
}

export interface Module {
  title: string;
  lessons: Lesson[];
  img: string;
}

export interface Lesson {
  title: string;
  description: string;
  topics: string[];
  content: Content[];
}

export interface Content {
  type: "text" | "video" | "audio" | "podcast";
  data: string;
}

export interface CoursesState {
  courses: CourseType[];
  loading: boolean;
  error: string | null;
}

export interface CoursesPropsType {
  courses: CourseType[];
}

export interface CoursePropsType {
  course: CourseType;
}

export interface ModulePropsType {
  module: Module[];
}

export interface MediaCardProps {
  data: Module | CourseType;
  linkTitle: string;
  courseId: number;
}

export interface LessonProps {
  lesson: Lesson;
}

export interface TopicProps {
  topic: string;
}

export interface ContentProps {
  content: Content;
}
export interface SearchProps {
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}
export interface NavigationProps {
  courseId?: number | string;
}
