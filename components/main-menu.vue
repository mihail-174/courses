<script lang="ts" setup>
const items = [
    { to: '/', name: 'Главная' },
    { to: '/contacts', name: 'Контакты' },
    { to: '/courses', name: 'Курсы' },
    { to: '/admin', name: 'Управление' },
]
</script>

<template>
    <div>
        <NuxtLink v-for="item in items" :to="item.to" class="item">
            {{ item.name }}
        </NuxtLink>
    </div>
</template>


<style scoped>
.item {
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    color: #009;
}
.router-link-active {
    color: #000;
    background: #EEE;
}
</style>
