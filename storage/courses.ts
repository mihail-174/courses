import type { Category, Color, Course } from "~/server/types";
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type CategoryWithColor = Category & { color?: string }
export type CourseWithCategory = Course & { category?: CategoryWithColor }

const indexById = <T extends {id:number}>(items: T[]): Record<number, T> => {
    return items.reduce((acc, v) => ({
        ...acc,
        [v.id]: v
    }))
}

export const useCoursesStore = defineStore('coursesStore', () => {
    const colors = ref(undefined as Color[] | undefined)
    const courses = ref(undefined as Course[] | undefined)
    const categories = ref(undefined as Category[] | undefined)

    const colorById = computed(() => indexById(colors.value || []))
    const categoryWithColor = computed(() => (categories.value || []).map(c => ({
        ...c,
        color: colorById.value[c.colorId]?.code
    })))

    const categoryById = computed(() => indexById(categoryWithColor.value || []))
    const coursesWithCategory = computed(() => (courses.value || []).map(c => ({
        ...c,
        category: categoryById.value[c.categoryId]
    })))

    // const categoryWithColor = computed(() => categories.value?.map(cat => ({
    //     ...cat,
    //     color: colors.find(c => c.id === cat.colorId)
    // })))

    return {
        categoryWithColor,
        coursesWithCategory,

        colors,
        courses,
        categories,

        fetchCourses: async () => {
            courses.value = await $fetch('/api/courses')
        },
        fetchCategories: async () => {
            categories.value = await $fetch('/api/categories')
        },
        fetchColors: async () => {
            if (!colors.value) {
                colors.value = await $fetch('/api/colors')
            }
        },
    }
})