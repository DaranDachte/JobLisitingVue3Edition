<template>
  <div
    class="flex justify-between rounded mb-[1.5rem] py-[2rem] px-[3rem] bg-[#fff]"
  >
    <div class="flex w-1/2">
      <div>
        <img :src="vacancy.logo" alt="logo" />
      </div>
      <div class="flex flex-col ml-3">
        <div>
          <div class="flex justify-around">
            <div class="w-1/3">
              <span class="text-[#5CA5A5]"> {{ vacancy.companyName }}</span>
            </div>
            <div class="w-2/3">
              <span
                v-for="label in vacancy.labels"
                :class="`text-white rounded-[0.75rem] px-2 pb-1 pt-2  mx-2 my-3 h-[1.5rem] ${colorMap[label]}`"
              >
                {{ label }}</span
              >
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div>
              <RouterLink :to="`/details/${vacancy.id}`">
                <p class="text-[#2B3939]">{{ vacancy.vacancyName }}</p>
              </RouterLink>
            </div>
          </div>
        </div>
        <div>
          <div
            class="flex justify-start items-center text-[#7C8F8F] font-medium"
          >
            <span class="text-[1.125rem] font-medium">{{
              vacancy.publishingDate
            }}</span>
            <span>
              <img class="mx-[1rem]" :src="GreyRound" alt="GreyRound" />
            </span>
            <span class="text-[1.125rem] font-medium">{{
              vacancy.employmentType
            }}</span>
            <span>
              <img class="mx-[1rem]" :src="GreyRound" alt="GreyRound" />
            </span>
            <span class="text-[1.125rem] font-medium">{{
              vacancy.location
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end w-1/2">
      <div class="h-[2rem]">
        <span
          v-for="tag in vacancy.tags"
          class="hover:text-[#FFF] rounded bg-[#eef7f6] text-[#5CA5A5] p-1 mx-1 hover:bg-[#5CA5A5] tracking-[-0.00769rem] hover:cursor-pointer"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div className="flex items-center justify-end pl-10">
      <div className="h-[2rem] flex w-[5rem]">
        <RouterLink
          :to="`/details/${vacancy.id}/edit`"
          className="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-normal p-2 mx-1 rounded tracking-[-0.00769rem]  hover:cursor-pointer"
        >
          Edit
        </RouterLink>
        <span
          class="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-normal p-2 mx-1 rounded tracking-[-0.00769rem] hover:cursor-pointer"
          @click="store.deleteVacancy(vacancy.id)"
        >
          Delete
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Vacancy } from "../stores/Vacansys";
import { useVacansiesStore } from "../stores/Vacansys";

import GreyRound from "../assets/img/GreyRound.svg";

const store = useVacansiesStore();

type VacancyObject = {
  vacancy: Vacancy;
};

const { vacancy } = defineProps<VacancyObject>();

type colorMapT = {
  [k: string]: string;
};

const colorMap: colorMapT = {
  "NEW!": "bg-[#5CA5A5]",
  FEATURED: "bg-[#2B3939]",
};
</script>
