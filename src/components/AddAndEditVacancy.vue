<template>
  <div class="flex flex-col w-[50rem] my-0 mx-auto">
    <div
      class="w-[8rem] my-[2rem] text-center bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded"
    >
      <RouterLink to="/">Back to List</RouterLink>
    </div>
    <header>
      <h2 class="text-[3rem] bold text-[#008080] pb-3">
        <span v-if="isExist(vacancyId)"> Edit Vacancy:</span>
        <span v-else>Add Vacancy:</span>
      </h2>
    </header>

    <form class="flex flex-col" @submit="onSubmit">
      <label class="{labelClasses}" htmlFor="companyName">
        <span class="text-[2rem] text-[#008080]">Company Name:</span>
        <Field
          class="mx-[2rem] outline-none rounded"
          type="text"
          v-model="vacancyInfo.companyName"
          name="companyName"
        />
        <ErrorMessage class="text-red-600" name="companyName" />
      </label>
      <label class="{labelClasses}" htmlFor="vacancyName">
        <span class="text-[2rem] text-[#008080]">Vacancy Name: </span>
        <Field
          class="mx-[2rem] outline-none rounded"
          type="text"
          v-model="vacancyInfo.vacancyName"
          name="vacancyName"
        />
        <ErrorMessage class="text-red-600" name="vacancyName" />
      </label>
      <label class="{labelClasses}" htmlFor="employmentType">
        <span class="text-[2rem] text-[#008080]">Employment Type:</span>
        <Field
          class="mx-[2rem] outline-none rounded"
          type="text"
          name="employmentType"
          v-model="vacancyInfo.employmentType"
        />
        <ErrorMessage class="text-red-600" name="employmentType" />
      </label>
      <label class="{labelClasses}" htmlFor="location">
        <span class="text-[2rem] text-[#008080]">Location: </span>
        <Field
          class="mx-[2rem] outline-none rounded"
          type="text"
          name="location"
          v-model="vacancyInfo.location"
        />
        <ErrorMessage class="text-red-600" name="location" />
      </label>
      <label htmlFor="tags">
        <span class="text-[2rem] text-[#008080]">Tags: </span>
        <Field
          class="mx-[2rem] outline-none rounded"
          type="text"
          name="tags"
          placeholder="tag1, tag2, tag3..."
          v-model="vacancyInfo.tags"
        />
        <ErrorMessage class="text-red-600" name="tags" />
      </label>
      <label class="{labelClasses}" htmlFor="labels">
        <span class="text-[2rem] text-[#008080]">Labels: </span>
        <Field
          class="mx-[2rem] outline-none rounded"
          type="text"
          name="labels"
          placeholder="label1, label2, label3..."
          v-model="vacancyInfo.labels"
        />
        <ErrorMessage class="text-red-600" name="labels" />
      </label>
      <label class="{labelClasses}" htmlFor="description">
        <span class="text-[2rem] text-[#008080]"> Description: </span>
        <Field
          class="outline-none rounded mx-[2rem]"
          name="description"
          rows="{15}"
          cols="{100}"
          v-model="vacancyInfo.description"
        />
        <ErrorMessage class="text-red-600" name="description" />
      </label>
      <button
        type="submit"
        class="bg-[#2E8B57] w-[9rem] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded"
      >
        Send Vacancy
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Field, useForm, ErrorMessage } from "vee-validate";
import { object, string } from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { isExist } from "../Helpers/isExist";
import { v4 as uuidv4 } from "uuid";
import { useVacansiesStore } from "../stores/Vacansys";
const store = useVacansiesStore();

const router = useRouter();

const route = useRoute();

const vacancyId = route.params.id;

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

const vacancyInfo_ = isExist(vacancyId)
  ? store.findVacancyById(vacancyId as string)
  : defaultvacancyData;

const separator = ", ";

const vacancyInfo = {
  ...vacancyInfo_,
  ...{
    tags: vacancyInfo_.tags.join(separator),
    labels: vacancyInfo_.labels.join(separator),
  },
};

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    object({
      companyName: string().required(),
      employmentType: string().required(),
      vacancyName: string().required(),
      name: string(),
      location: string().required(),
      description: string().required(),
      labels: string().required(),
      tags: string().required(),
    })
  ),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);

  const data = {
    ...vacancyInfo,
    ...{
      tags: vacancyInfo.tags.split(separator),
      labels: vacancyInfo.labels.split(separator),
    },
  };

  if (isExist(vacancyId)) {
    store.updateVacancy(data);
  } else store.addNewVacancy(data);
  router.push("/");
});
</script>
