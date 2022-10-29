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
          <div class="input-part__label">이름:</div>
          <input
            class="input-part__push"
            label="이름"
            type="text"
            v-model="newPerson._name"
          />
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

export default defineComponent({
  emits: ["closeDialog"],
  setup(_, { emit }) {
    //const emit = defineEmits(["closeDialog"]);
    const usePersonStore = personStore();
    const newPerson = ref(new person("", "", 0, "", "", "", "", "", 0, 0));
    const savePerson = () => {
      emit("closeDialog");
      usePersonStore.addPerson(newPerson.value as person);
    };
    return {
      newPerson,
      savePerson,
    };
  },
});
</script>
