<template>
  <div :class="'the_person'">
    <PersonFace
      :personStyle="personStyle"
      :hairStyle="hairStyle"
      :gender="gender"
    ></PersonFace>
    <div class="person-info-box">
      <div class="person__name">{{ person?.getName() }}</div>
      <div class="person__age">{{ person?.getAge() }}살</div>
      <div class="person__controller">
        <div class="person__controller--update"></div>
        <div class="person__controller--delete"></div>
      </div>
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
    const personStyle = {
      backgroundColor: props.person?.getPersonalColor(),
    };
    return {
      personStyle,
      hairStyle,
      gender,
    };
  },
});
</script>
<style lang="scss">
.the_person {
  width: 180px;
  min-height: 70px;
  margin: 50px;
}
.person-info-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  margin-top: 20px;
  border-radius: 5px;
  width: 180px;
  min-height: 80px;
  .person__name {
    font-size: larger;
    font-weight: 800;
  }
}
</style>
