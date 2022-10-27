<template>
  <div class="person-view">
    <div class="person-view-text">
      지구에는 수많은 사람들이 함께살고있어 보이지?
    </div>
    <div class="person-view-text">
      사람들은 서로다른 모습, 서로다른 생각을 하며 살고있지
    </div>
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
    const rand = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const usePersonStore = personStore();
    const scaleArr = [-1, 1];
    let privateNum = 0 as number;
    for (const getPerson of data.person) {
      const randomScaleNumber = rand(0, 1);
      const newPerson = new person(
        privateNum,
        getPerson.name,
        getPerson.gender,
        getPerson.age,
        getPerson.personalColor,
        getPerson.hairColor,
        getPerson.topClothColor,
        getPerson.bottomClothColor,
        getPerson.shoesColor,
        scaleArr[randomScaleNumber],
        rand(5, 9)
      ) as person;
      usePersonStore.addPerson(newPerson);
      ++privateNum;
    }
    const personArr: Map<number, person> = usePersonStore.personArr;
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
  &-text {
    font-weight: 600;
    font-size: larger;
  }
  .person-box {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
