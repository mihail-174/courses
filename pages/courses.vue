<script lang="ts" setup>
definePageMeta({
    title: 'Наши Курсы'
})
</script>

<template>
  <div class="wrapper">
    <div class="content">
        <NuxtPage/>
    </div>
      <div class="sidebar">
          Не знаете какой выбрать? <NuxtLink to="/contacts">Свяжитесь с нами</NuxtLink> мы подскажем!
      </div>
  </div>
</template>

<style scoped>
.wrapper {
    display: flex;
}
.content {
    width: 400px;
}
.sidebar {
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    background-color: #eef;
}
</style>
