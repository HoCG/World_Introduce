<template>
  <div class="dialog">
    <div class="dialog-body">
      <div class="dialog-title">사람의 정보를 입력해줘야해!</div>
      <div class="close-btn" @click="closePersonDialog()"></div>
      <div class="dialog-content">
        <div class="input-part">
          <div class="input-part__label">이름:</div>
          <input
            class="input-part__push"
            label="이름"
            type="text"
            v-model="newPerson._name"
          />
        </div>
        <div class="input-part">
          <div class="input-part__label">나이:</div>
          <input
            class="input-part__push"
            label="나이"
            type="text"
            v-model="newPerson._age"
          />
        </div>
        <div class="checkbox-part">
          <div class="checkbox-part__label">성별:</div>
          <div class="checkbox-part__gender">
            <input
              type="radio"
              value="남"
              name="성별"
              v-model="newPerson._gender"
            />
            남
            <input
              type="radio"
              value="여"
              name="성별"
              v-model="newPerson._gender"
            />
            여
          </div>
        </div>
        <ColorInputPart
          :pickColor="newPerson._personalColor"
          :pickColorText="'피부색:'"
          @changeColor="changePersonalColor"
        ></ColorInputPart>
        <ColorInputPart
          :pickColor="newPerson._hairColor"
          :pickColorText="'머리색:'"
          @changeColor="changeHairColor"
        ></ColorInputPart>
        <ColorInputPart
          :pickColor="newPerson._topClothColor"
          :pickColorText="'윗옷색:'"
          @changeColor="changeTopClothColor"
        ></ColorInputPart>
        <ColorInputPart
          :pickColor="newPerson._bottomClothColor"
          :pickColorText="'바지색:'"
          @changeColor="changeBottomClothColor"
        ></ColorInputPart>
        <ColorInputPart
          :pickColor="newPerson._shoesColor"
          :pickColorText="'신발색:'"
          @changeColor="changeShoesColor"
        ></ColorInputPart>
      </div>
      <div class="dialog-control-area">
        <div class="dialog-save-btn" @click="savePerson()">저장</div>
        <div class="dialog-cancel-btn" @click="closePersonDialog()">취소</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import person from "@/stores/person";
import { personStore } from "@/stores/personStore";
import ColorInputPart from "./ColorInputPart.vue";

export default defineComponent({
  components: {
    ColorInputPart,
  },
  emits: ["closeDialog"],
  setup(_, { emit }) {
    //const emit = defineEmits(["closeDialog"]);
    const usePersonStore = personStore();
    const personArr = usePersonStore.personArr;
    const scaleArr = [-1, 1];
    let newPerson = ref(new person("", "", 0, "", "", "", "", "", 0, 0));
    const rand = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const savePerson = () => {
      const randomScaleNumber = rand(0, 1);
      newPerson.value._scaleNumber = scaleArr[randomScaleNumber];
      newPerson.value._speed = speedChecker(rand(5, 15));
      emit("closeDialog");
      usePersonStore.addPerson(newPerson.value as person);
      newPerson = ref(new person("", "", 0, "", "", "", "", "", 0, 0));
    };
    const changePersonalColor = (color: string) => {
      newPerson.value._personalColor = color;
    };
    const changeHairColor = (color: string) => {
      newPerson.value._hairColor = color;
    };
    const changeTopClothColor = (color: string) => {
      newPerson.value._topClothColor = color;
    };
    const changeBottomClothColor = (color: string) => {
      newPerson.value._bottomClothColor = color;
    };
    const changeShoesColor = (color: string) => {
      newPerson.value._shoesColor = color;
    };
    type speedType = {
      (speed: number): number;
    };
    const speedChecker: speedType = (speed: number) =>
      !personArr.get(speed) ? speed : speedChecker(rand(5, 15));
    const closePersonDialog = () => {
      newPerson = ref(new person("", "", 0, "", "", "", "", "", 0, 0));
      emit("closeDialog");
    };
    return {
      newPerson,
      savePerson,
      changePersonalColor,
      changeHairColor,
      changeTopClothColor,
      changeBottomClothColor,
      changeShoesColor,
      closePersonDialog,
    };
  },
});
</script>
