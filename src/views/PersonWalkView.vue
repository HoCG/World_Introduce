<template>
  <div class="walk-container">
    <div class="walk-space-text">자! 이제 그들이 움직이는걸 봐봐!</div>
    <div class="walk-space-text">
      이렇게 도시속에서 서로 교감하며 살아가고있어~!
    </div>
    <div class="walk-space">
      <img src="../assets/city_img.jpg" />
      <template v-for="[index, person] in personArr" :key="index">
        <WalkMan
          v-if="person.getGender() === '남' ? true : false"
          :person="person"
        ></WalkMan>
        <WalkWoman v-else :person="person"></WalkWoman>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { personStore } from "../stores/personStore";
import WalkMan from "@/components/persons/WalkMan.vue";
import WalkWoman from "@/components/persons/WalkWoman.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    WalkMan,
    WalkWoman,
  },
  setup() {
    const usePersonStore = personStore();
    const personArr = usePersonStore.personArr;
    return {
      personArr,
    };
  },
});
</script>
<style lang="scss">
.walk-space {
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background: #fff;
  width: 2000px;
  height: 700px;
  margin: 50px auto;
  &-text {
    font-weight: 600;
    font-size: larger;
  }
}
</style>
