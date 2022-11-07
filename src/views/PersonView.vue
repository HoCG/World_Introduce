<template>
  <div class="person-view">
    <div class="person-view-text-box">
      <h1 class="person-view-text">
        지구에는 수많은 사람들이 함께살고있어 보이지?
      </h1>
      <h1 class="person-view-text">
        사람들은 서로다른 모습, 서로다른 생각을 하며 살고있지
      </h1>
    </div>
    <div class="person-box">
      <Person
        v-for="[index, person] in personArr"
        :key="index"
        :person="person"
      ></Person>
    </div>
    <div class="person-add-btn" @click="controlDialog()">사람추가!</div>
    <PersonDialog
      @closeDialog="closeDialog"
      v-if="dialog === true"
    ></PersonDialog>
  </div>
</template>
<script lang="ts">
import Person from "@/components/persons/Person.vue";
import PersonDialog from "@/components/persons/personDialog/PersonDialog.vue";
import { personStore } from "../stores/personStore";
import data from "../assets/data.json";
import { defineComponent, ref, onMounted } from "vue";
import person from "@/stores/person";

export default defineComponent({
  name: "PersonView",
  components: {
    Person,
    PersonDialog,
  },
  setup() {
    let dialog = ref(false);
    const usePersonStore = personStore();
    const scaleArr = [-1, 1];
    const controlDialog = () => {
      dialog.value = true;
    };
    const closeDialog = () => {
      dialog.value = false;
    };
    const rand = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    type speedType = {
      (speed: number): number;
    };
    const personArr: Map<number, person> = usePersonStore.personArr;
    onMounted(() => {
      const speedChecker: speedType = (speed: number) =>
        !personArr.get(speed) ? speed : speedChecker(rand(5, 15));
      for (const getPerson of data.person) {
        const randomScaleNumber = rand(0, 1);
        const speed = speedChecker(rand(5, 15));
        const personInfo = new person(
          getPerson.name,
          getPerson.gender,
          getPerson.age,
          getPerson.personalColor,
          getPerson.hairColor,
          getPerson.topClothColor,
          getPerson.bottomClothColor,
          getPerson.shoesColor,
          scaleArr[randomScaleNumber],
          speed
        ) as person;
        usePersonStore.addPerson(personInfo as person);
      }
    });
    return {
      dialog,
      personArr,
      controlDialog,
      closeDialog,
    };
  },
});
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Rammetto+One);
.person-view {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &-text {
    margin: 3rem auto -2rem;
    font-size: 3.5rem;
    letter-spacing: -2px;
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  }
  .person-view-text-box {
    margin-bottom: 40px;
  }
  .person-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.person-add-btn {
  width: 230px;
  height: 70px;
  border-radius: 30px;
  font-size: larger;
  font-weight: 700;
  cursor: pointer;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
