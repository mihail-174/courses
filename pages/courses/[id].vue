<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = computed(() => route.params.id)

useHead({
    title: `Страница курса ${id.value}`
})
</script>

<template>
  <div>
      Курс номер <b>{{ id }}</b>
  </div>
</template>

<style scoped></style>
