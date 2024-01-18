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
    <Form @submit="onSubmit">
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
        <textarea
          class="outline-none rounded"
          name="description"
          rows="{15}"
          cols="{100}"
          v-model="vacancyInfo.description"
        ></textarea>
      </label>

      <button
        class="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded"
      >
        Send Vacancy
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { isExist } from "../Helpers/isExist";
import { v4 as uuidv4 } from "uuid";
const vacancyInfo = {
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
const schema = {
  companyName: "required|min:3|max:100|alpha_spaces",
  vacancyName: "required|min:3|max:100|alpha_spaces",
  publishingDate: "required|min_value:3|max_value:50",
  employmentType: "required|min:3|max:100|alpha_spaces",
  location: "required|min:3|max:100|alpha_spaces",
  description: "required|min:3|max:100",
};

const { handleSubmit } = useForm({ validationSchema: schema });

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
});
</script>
