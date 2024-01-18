<template>
  <div class="flex flex-col w-[70rem] my-0 mx-auto">
    <div class="my-5">
      <button
        className="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded"
      >
        <RouterLink to="/add"> Add Vacancy</RouterLink>
      </button>
    </div>
    <ul>
      <div class="item" v-for="vacancy in store.vacancies">
        <Item :vacancy="vacancy" />
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Item from "./Item.vue";
import { useVacansiesStore } from "../stores/Vacansys";
const store = useVacansiesStore();
</script>
