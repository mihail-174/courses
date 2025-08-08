<script lang="ts" setup>
import {ref, onMounted} from 'vue'
definePageMeta({
    title: 'Главная'
})
import type {Course} from '../server/types'
const courses = ref<Course[]>([])
onMounted(async () => {
    courses.value = await $fetch('/api/courses')
})
</script>

<template>
  <div>
    <div
        v-for="course in courses"
        :key="course.id"
    >
        {{ course.name }}
    </div>
  </div>
</template>

<style scoped></style>
