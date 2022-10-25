<template>
  <div class="person-view">
    <div>지구에는 수많은 사람들이 함께살고있어 보이지?</div>
    <div>사람들은 서로다른 모습, 서로다른 생각을 하며 살고있지</div>
    <div class="person-box">
      <Person
        v-for="[index, person] in personArr"
        :key="index"
        :person="person"
      ></Person>
    </div>
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
        getPerson.hairColor,
        "",
        "",
        0,
        0
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
  flex-direction: column;
  align-content: center;
  .person-box {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
