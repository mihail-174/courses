<script lang="ts" setup>
import FormAddCourses from "~/components/form-add-courses.vue";
import {useCoursesStore} from "~/storage/courses";
import {useAdminStore} from "~/storage/admin";
import type {Course} from "~/server/types";

definePageMeta({
  title: 'Админ панель'
})
const coursesStore = useCoursesStore()
const adminStore = useAdminStore()

const {data, pending} = useAsyncData('coursesListData', async () => {
  await Promise.all([
      coursesStore.fetchCourses(),
      coursesStore.fetchCategories(),
      coursesStore.fetchColors()
  ])
  return {
    courses: coursesStore.courses,
    categories: coursesStore.categories
  }
})

const courses = computed(() => {
  return coursesStore.courses
})

const save = async (value: Course) => {
  await adminStore.addCourse(value)
}
</script>

<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="block-courses">
        <h3 class="block-courses__title">Список курсов</h3>
        <div v-if="pending">loading courses...</div>
        <div class="block-courses__list list" v-else>
          <div class="block-courses__item" v-if="data" v-for="course in courses" :key="course.id">
            {{ course.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="block-form">
        <h3 class="block-form__title">Форма</h3>
        <div class="block-form__content">
          <div v-if="pending">loading form...</div>
          <FormAddCourses @save="save" v-else :categories="data.categories" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
}
.block-courses__title {
  margin-top: 0;
}
.block-courses__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.block-form__title {
  margin-top: 0;
}
</style>
