<script setup lang="ts">
import { ref } from 'vue'
import type {Category, Course} from "@/server/types";
import {useCoursesStore} from "~/storage/courses";

const coursesStore = useCoursesStore()

const props = defineProps<{
  categories: Category[]
}>()

const emit = defineEmits(["save"])

const newCourse = ref<Course>({
  id: 0,
  name: '',
  categoryId: 0
})

const submitForm = () => {
  newCourse.value.id = coursesStore.courses.length
  emit("save", newCourse.value)
  newCourse.value = {
    id: 0,
    name: '',
    categoryId: 0
  }
}
</script>

<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form__fields">
      <div class="form__field">
        <label for="form-field-name" class="form__label">Название</label>
        <input v-model="newCourse.name" id="form-field-name" name="name" type="text" class="form__input"/>
      </div>
      <div class="form__field">
        <label for="" class="form__label">Категория</label>
        <div class="form__radios">
          <div class="form__radio" v-for="item in categories" :key="item.id">
            <input
                :id="'form-field-radio-' + item.id"
                v-model="newCourse.categoryId"
                :value="item.id"
                name="radios"
                type="radio"
                class="form__input"
            />
            <label :for="'form-field-radio-' + item.id" class="form__label">{{ item.name }}</label>
          </div>
        </div>
      </div>
      <div class="form__actions">
        <button
            :disabled="(newCourse.name === '' || newCourse.categoryId === 0) && 'disabled'"
            class="form__submit"
        >Готово</button>
      </div>
    </div>
  </form>
</template>

<style scoped>

.form {
  max-width: 400px;
}
.form__field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
}
.form__label {
  font-size: 14px;
}
.form__input {
  font-size: 16px;
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 4px;
  outline: none;
}
.form__radios {
  display: flex;
  gap: 16px;
}
.form__radios .form__label {
  font-size: 16px;
}
.form__submit {
  border-radius: 4px;
  border: 1px solid #00bd7e;
  background-color: #00bd7e;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: all .3s;
}
.form__submit:hover {
  border-color: #00ad6e;
  background-color: #00ad6e;
}
.form__submit[disabled],
.form__submit[disabled]:hover {
  cursor: not-allowed;
  border-color: #b3b3b3;
  background-color: #b3b3b3;
}
</style>