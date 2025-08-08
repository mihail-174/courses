import { defineStore } from 'pinia'
import type { Course } from "~/server/types";
import { useCoursesStore } from "~/storage/courses";

export const useAdminStore = defineStore('adminStore', () => {
    const coursesStore = useCoursesStore()
    return {
        addCourse: async (course: Course) => {
            await $fetch<Course>(
                '/api/courses',
                {
                    method: 'POST',
                    body: course
                }
            ).then((data: Course) => {
                console.log(`Курс "${data.name}" успешно добавлен`, data);
            });
            await coursesStore.fetchCourses()
        }
    }
})