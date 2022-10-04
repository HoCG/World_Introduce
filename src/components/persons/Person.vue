<template>
  <div :class="'the_person'">
    <PersonFace :personStyle="personStyle" :hairStyle="hairStyle"></PersonFace>
    <div class="person__name">{{ person?.getName() }}</div>
    <div class="person__age">{{ person?.getAge() }}</div>
    <div class="person__controller">
      <div class="person__controller--update"></div>
      <div class="person__controller--delete"></div>
    </div>
  </div>
</template>
<script lang="ts">
import person from "@/stores/person";
import PersonFace from "./PersonHead.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Person",
  components: {
    PersonFace,
  },
  props: {
    person: person,
  },
  data() {
    return {
      personStyle: {
        backgroundColor: this.person?.getPersonalColor(),
      },
      hairStyle: {
        backgroundColor: this.person?.getHairColor(),
      },
    };
  },
});
</script>
<style lang="scss">
.the_person {
  width: 300px;
  margin: 50px;
}
</style>
