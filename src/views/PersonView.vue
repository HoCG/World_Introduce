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
import { mapActions, mapState } from "pinia";
import { personStore } from "../stores/personStore";
import data from "../assets/data.json";
import { defineComponent } from "vue";
import person from "@/stores/person";

export default defineComponent({
  name: "PersonView",
  data() {
    return {
      index: 0,
    };
  },
  components: {
    Person,
  },
  computed: {
    ...mapState(personStore, ["personArr"]),
  },
  methods: {
    ...mapActions(personStore, ["addPerson"]),
  },
  mounted() {
    let privateNum = 0;
    for (const getPerson of data.person) {
      const newPerson = new person(
        privateNum,
        getPerson.name,
        getPerson.gender,
        getPerson.age,
        getPerson.personalColor,
        getPerson.hairColor
      );
      this.addPerson(newPerson);
      ++privateNum;
    }
    console.log(this.personArr);
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
