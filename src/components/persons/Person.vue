<template>
  <div :class="'the_person'">
    <PersonFace
      :personStyle="personStyle"
      :hairStyle="hairStyle"
      :gender="gender"
    ></PersonFace>
    <div class="person__name">{{ person?.getName() }}</div>
    <div class="person__age">{{ person?.getAge() }}살</div>
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
  setup(props) {
    const gender = props.person?.getGender();
    const hairStyle = props.person?.getHairColor();
    return {
      personStyle: {
        backgroundColor: props.person?.getPersonalColor(),
      },
      hairStyle,
      gender,
    };
  },
});
</script>
<style lang="scss">
.the_person {
  width: 180px;
  margin: 50px;
  .person__name {
    font-size: larger;
    font-weight: 800;
  }
}
</style>
