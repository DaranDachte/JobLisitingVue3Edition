import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import photosnap from "../assets/img/photosnap.svg";
import manage from "../assets/img/manage.svg";
import eyecam from "../assets/img/eyecam.svg";
import account from "../assets/img/account.svg";
import faceit from "../assets/img/faceit.svg";
import insure from "../assets/img/insure.svg";
import loop from "../assets/img/loopStudios.svg";
import myHome from "../assets/img/myhome.svg";
import shortly from "../assets/img/shortly.svg";
import airFilter from "../assets/img/airFilter.svg";

import { v4 as uuidv4 } from "uuid";
export type Vacancy = {
  id: string;
  companyName: string;
  vacancyName: string;
  publishingDate: string;
  employmentType: string;
  location: string;
  logo: string;
  labels: string[];
  tags: string[];
  description: string;
};

export const useVacansiesStore = defineStore("vacanies", () => {
  let vacancies: Ref<Vacancy[]> = ref([
    {
      id: uuidv4(),
      companyName: "Photosnap",
      vacancyName: "FullStack Developer",
      publishingDate: "1 day ago",
      employmentType: "Full Time",
      location: "USA only",
      logo: photosnap,
      labels: ["NEW!", "FEATURED"],
      tags: ["Frontend", "Senior", "Html", "Css", "JavaScript"],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
    {
      id: uuidv4(),
      companyName: "Manage",
      vacancyName: "Senior Frontend Developer",
      publishingDate: "1 day ago",
      employmentType: "Part Time",
      location: "Remote",
      logo: manage,
      labels: ["NEW!", "FEATURED"],
      tags: ["FullStack", "Frontend", "Python", "React", "TypeScript"],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },

    {
      id: uuidv4(),
      companyName: "Eyecam",
      vacancyName: "Backend Developer",
      publishingDate: "2 days ago",
      employmentType: "Full Time",
      location: "Germany",
      logo: eyecam,
      labels: [],
      tags: ["Backend", "Python", "MongoDB", "JavaScript"],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
    {
      id: uuidv4(),
      companyName: "Account",
      vacancyName: "Junior Web Developer",
      publishingDate: "2 days ago",
      employmentType: "Full Time",
      location: "Remote",
      logo: account,
      labels: [],
      tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript"],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
    {
      id: uuidv4(),
      companyName: "Faceit",
      vacancyName: "Web Developer",
      publishingDate: "2 days ago",
      employmentType: "Full Time",
      location: "Remote",
      logo: faceit,
      labels: [],
      tags: ["FullStack", "Frontend", "Middle", "React", "TypeScript"],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
    {
      id: uuidv4(),
      companyName: "Insure",
      vacancyName: "Software Engineer",
      publishingDate: "2 days ago",
      employmentType: "Full Time",
      location: "Remote",
      logo: insure,
      labels: [],
      tags: ["Backend", "Midweight", "JavaScript", "Sass", "Ruby"],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
    {
      id: uuidv4(),
      companyName: "Loop",
      vacancyName: "Junior Backend Developer",
      publishingDate: "2 days ago",
      employmentType: "Full Time",
      location: "United Kingdom",
      logo: loop,
      labels: [],
      tags: ["Backend", "Ror", "Sass", "Ruby"],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
    {
      id: uuidv4(),
      companyName: "myHome",
      vacancyName: "Junior  Developer",
      publishingDate: "3 days ago",
      employmentType: "Full Time",
      location: "United Kingdom",
      logo: myHome,
      labels: [],
      tags: [
        "FullStack",
        "Frontend",
        "Junior",
        "React",
        "TypeScript",
        "MongoDB",
      ],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
    {
      id: uuidv4(),
      companyName: "Shortly",
      vacancyName: "Junior  Developer",
      publishingDate: "3 days ago",
      employmentType: "Full Time",
      location: "EU only",
      logo: shortly,
      labels: [],
      tags: [
        "FullStack",
        "Frontend",
        "Junior",
        "React",
        "TypeScript",
        "MongoDB",
      ],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
    {
      id: uuidv4(),
      companyName: "Air Filter",
      vacancyName: "Junior  Developer",
      publishingDate: "3 days ago",
      employmentType: "Full Time",
      location: "Remote",
      logo: airFilter,
      labels: [],
      tags: [
        "FullStack",
        "Frontend",
        "Junior",
        "React",
        "TypeScript",
        "MongoDB",
      ],
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!",
    },
  ]);
  const deleteVacancy = (id: string) => {
    vacancies.value = vacancies.value.filter((el) => el.id !== id);
  };

  const findVacancyById = (id: string) => {
    return vacancies.value.filter((el) => el.id === id)[0];
  };

  const addNewVacancy = (vacancy: Vacancy) => {
    vacancies.value.push(vacancy);
  };

  const updateVacancy = (vacancy: Vacancy) => {
    const index = vacancies.value.findIndex((el) => el.id === vacancy.id);
    vacancies.value[index] = vacancy;
  };

  return {
    vacancies,
    deleteVacancy,
    findVacancyById,
    addNewVacancy,
    updateVacancy,
  };
});
