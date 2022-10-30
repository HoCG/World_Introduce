<template>
  <div class="dialog">
    <div class="dialog-body">
      <div class="dialog-title">사람의 정보를 입력해줘야해!</div>
      <div class="close-btn" @click="$emit('closeDialog')"></div>
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
        <div class="input-part">
          <div class="">
            <div class="input-part__label">색상:</div>
            <div class="color-element" :style="personalColorStyle"></div>
          </div>
          <div class="color-dialog-btn" @click="openColorDialog">go</div>
          <ColorDialog
            v-if="colorDialog"
            :thisColor="newPerson._personalColor"
            @changeColor="changePersonalColor"
            @closeColorDialog="closeColorDialog"
          ></ColorDialog>
        </div>
      </div>
      <div class="dialog-control-area">
        <div class="dialog-save-btn" @click="savePerson()">저장</div>
        <div class="dialog-cancel-btn" @click="$emit('closeDialog')">취소</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import person from "@/stores/person";
import { personStore } from "@/stores/personStore";
import ColorDialog from "../colorDialogs/ColorDialog.vue";

export default defineComponent({
  components: {
    ColorDialog,
  },
  emits: ["closeDialog"],
  setup(_, { emit }) {
    //const emit = defineEmits(["closeDialog"]);
    let thisColor = ref("");
    let colorDialog = ref(false);
    const usePersonStore = personStore();
    const newPerson = ref(new person("", "", 0, "", "", "", "", "", 0, 0));
    const personalColorStyle = ref({
      backgroundColor: newPerson.value._personalColor,
    });
    const savePerson = () => {
      emit("closeDialog");
      usePersonStore.addPerson(newPerson.value as person);
    };
    const changePersonalColor = (color: string) => {
      newPerson.value._personalColor = color;
    };
    const closeColorDialog = () => {
      colorDialog.value = false;
    };
    const openColorDialog = () => {
      colorDialog.value = true;
    };
    return {
      newPerson,
      savePerson,
      colorDialog,
      thisColor,
      changePersonalColor,
      closeColorDialog,
      openColorDialog,
      personalColorStyle,
    };
  },
});
</script>
