import { createRouter, createWebHistory } from "vue-router";
import AddAndEditVacancy from "../components/AddAndEditVacancy.vue";
import Home from "../components/Home.vue";
import VacancyDetails from "../components/VacancyDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/add", component: AddAndEditVacancy },
  { path: "/details/:id", component: VacancyDetails },
  { path: "/details/:id/edit", component: AddAndEditVacancy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
