<script lang="ts" setup>
import type { CourseWithCategory } from '../storage/courses'
defineProps<{
 courses: CourseWithCategory[]
}>()
</script>

<template>
 <div>
   <NuxtLink
     v-for="course in courses"
     :key="course.id"
     class="course"
     :to="`/courses/${course.id}`">
     <span
       v-if="course.category"
       class="category"
       :style="`background-color: ${course.category.color || '#FFFFFF'}`"></span>
     {{ course.name }}
   </NuxtLink>
 </div>
</template>

<style scoped>
.course {
 display: block;
 padding: 20px;
 position: relative;
 border: 1px solid #CCC;
 margin-bottom: 5px;
 margin-right: 20px;
 border-radius: 5px;
}
.category {
 position: absolute;
 width: 10px;
 height: 100%;
 left: 0;
 top: 0;
}
</style>