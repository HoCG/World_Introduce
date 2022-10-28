import { defineStore } from "pinia";
import person from "./person";

export const personStore = defineStore("personStore", {
  state: () => {
    return {
      privateNum: 0,
      personArr: new Map<number, person>(),
    };
  },
  actions: {
    addPerson(item: person) {
      this.personArr.set(this.privateNum, item);
      this.privateNum++;
    },
  },
});
