<script lang="ts" setup>
import type { CategoryWithColor } from '../storage/courses'


const props = defineProps({
 categories: {
   type: Array as PropType<CategoryWithColor[]>,
   default: () => [],
 },
 active: Number,
})


const categories = computed(
 () => props.categories.map(c => ({
   ...c,
   url: `/courses?category=${c.id}`,
   active: props.active === c.id
 }))
)


</script>


<template>
 <div>
   <NuxtLink
     v-for="c in categories"
     :key="c.id"
     :to="c.url"
     :class="{item: true, active: c.active}"
   >
     <span
       v-if="c.color"
       class="color"
       :style="`background-color: ${c.color};`"></span>
     {{  c.name  }}
   </NuxtLink>
 </div>
</template>


<style scoped>
.item {
 margin-bottom: 20px;
 text-decoration: none;
 font-size: 14px;
 display: inline-block;
 margin-right: 15px;
}
.active {
 font-weight: bold;
}
.color {
 display: inline-block;
 width: 6px;
 height: 6px;
 border-radius: 6px;
 vertical-align: middle;
}
</style>
