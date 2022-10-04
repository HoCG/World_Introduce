<template>
  <div class="person-view">
    <Person
      v-for="[index, person] in personArr"
      :key="index"
      :person="person"
    ></Person>
  </div>
</template>
<script lang="ts">
import Person from "@/components/persons/Person.vue";
import { personStore } from "../stores/personStore";
import data from "../assets/data.json";
import { defineComponent } from "vue";
import person from "@/stores/person";

export default defineComponent({
  name: "PersonView",
  components: {
    Person,
  },
  setup() {
    const usePersonStore = personStore();
    let privateNum = 0 as number;
    for (const getPerson of data.person) {
      const newPerson = new person(
        privateNum,
        getPerson.name,
        getPerson.gender,
        getPerson.age,
        getPerson.personalColor,
        getPerson.hairColor
      );
      usePersonStore.addPerson(newPerson);
      ++privateNum;
    }
    const personArr = usePersonStore.personArr;
    return {
      personArr,
    };
  },
});
</script>
<style lang="scss">
.person-view {
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
}
</style>
