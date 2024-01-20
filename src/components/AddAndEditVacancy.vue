<template>
  <div class="flex flex-col w-[50rem] my-0 mx-auto">
    <div
      class="w-[8rem] my-[2rem] text-center bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded"
    >
      <RouterLink to="/">Back to List</RouterLink>
    </div>
    <header>
      <h2 class="text-[3rem] bold text-[#008080] pb-3">
        {{ isExist(vacancyInfo) ? "Edit" : "Add" }} Vacancy:
      </h2>
    </header>
    <form @submit="onSubmit">
      <label class="{labelClasses}" htmlFor="companyName">
        <span class="text-[2rem] text-[#008080]">Company Name:</span>
        <Field
          class="{FieldClasses}"
          type="text"
          v-model="vacancyInfo.companyName"
          name="companyName"
        />
      </label>
      <label class="{labelClasses}" htmlFor="vacancyName">
        <span class="text-[2rem] text-[#008080]">Vacancy Name: </span>
        <Field
          class="{FieldClasses}"
          type="text"
          v-model="vacancyInfo.vacancyName"
          name="vacancyName"
        />
      </label>
      <label class="{labelClasses}" htmlFor="employmentType">
        <span class="text-[2rem] text-[#008080]">Employment Type: </span>
        <Field
          class="{FieldClasses}"
          type="text"
          name="employmentType"
          v-model="vacancyInfo.employmentType"
        />
      </label>
      <label class="{labelClasses}" htmlFor="location">
        <span class="text-[2rem] text-[#008080]">Location: </span>
        <Field
          class="{FieldClasses}"
          type="text"
          name="location"
          v-model="vacancyInfo.location"
        />
      </label>
      <label class="{labelClasses}" htmlFor="tags">
        <span class="text-[2rem] text-[#008080]">Tags: </span>
        <Field
          class="{FieldClasses}"
          type="text"
          name="tags"
          placeholder="tag1, tag2, tag3..."
          v-model="vacancyInfo.tags"
        />
      </label>
      <label class="{labelClasses}" htmlFor="labels">
        <span class="text-[2rem] text-[#008080]">Labels: </span>
        <Field
          class="{FieldClasses}"
          type="text"
          name="labels"
          placeholder="label1, label2, label3..."
          v-model="vacancyInfo.labels"
        />
      </label>
      <label class="{labelClasses}" htmlFor="description">
        <span class="text-[2rem] text-[#008080]"> Description: </span>
        <Field
          class="outline-none rounded"
          name="description"
          rows="{15}"
          cols="{100}"
          v-model="vacancyInfo.description"
        ></Field>
      </label>

      <RouterLink to="/">
        <button
          type="submit"
          class="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded"
        >
          Send Vacancy
        </button>
      </RouterLink>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Field, useForm } from "vee-validate";
import { object, string } from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { isExist } from "../Helpers/isExist";
import { v4 as uuidv4 } from "uuid";
import { useVacansiesStore } from "../stores/Vacansys";
const store = useVacansiesStore();

const router = useRouter();

const route = useRoute();

const vacancyId: string | undefined = route.params.id;

const defaultvacancyData = {
  id: uuidv4(),
  companyName: "",
  vacancyName: "",
  publishingDate: "",
  employmentType: "",
  location: "",
  logo: "",
  labels: [],
  tags: [],
  description: "",
};

const vacancyInfo = vacancyId
  ? store.findVacancyById(vacancyId)
  : defaultvacancyData;

console.log(vacancyInfo);

const { values, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    object({
      companyName: string().required(),
      vacancyName: string().required(),
      name: string(),
      location: string().required(),
      description: string().required(),
      labels: string().required(),
      tags: string().required(),
    })
  ),
});
console.log(values);

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
});

console.log(onSubmit);
</script>
