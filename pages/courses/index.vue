<script lang="ts" setup>
import {computed} from "vue";
import {useRoute} from 'vue-router'
import {useCoursesStore} from "~/storage/courses";

const store = useCoursesStore()
const {data, pending} = useAsyncData('courseListData', async () => {
  await Promise.all([
      store.fetchCourses(),
      store.fetchCategories(),
      store.fetchColors(),
  ])
  // await store.fetchCourses()
  // return store.courses
  return {
    courses: store.coursesWithCategory,
    categories: store.categoryWithColor,
  }
})
const categories = computed(() => data.value?.categories || [])
const route = useRoute()
const categoryId = computed(() => Number(route.query.category))
const courses = computed(() => {
  const items = data.value?.courses || []
  return categoryId.value ?
      items.filter(c => c.categoryId === categoryId.value):
      items
})
</script>

<template>
  <div v-if="pending">loading...</div>
  <div v-else>
    <CategoryFilter :categories="categories" :active="categoryId"/>
    <CourseList :courses="courses || []"/>
<!--    <pre>active category: {{ categoryId}}</pre>-->
<!--    {{ JSON.stringify(categories, null, 2) }}-->
<!--    {{ JSON.stringify(courses, null, 2) }}-->
  </div>
</template>

<style scoped></style>
