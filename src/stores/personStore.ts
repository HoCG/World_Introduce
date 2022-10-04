import { defineStore } from "pinia";
import person from "./person";

export const personStore = defineStore("personStore", {
  state: () => {
    return {
      personArr: new Map<number, person>(),
    };
  },
  actions: {
    addPerson(item: person) {
      this.personArr.set(item.getId(), item);
    },
  },
});
