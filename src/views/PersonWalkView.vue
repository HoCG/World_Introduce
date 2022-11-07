<template>
  <div class="walk-container">
    <h1 class="walk-space-text">자! 이제 그들이 움직이는걸 봐봐!</h1>
    <h1 class="walk-space-text">
      이렇게 도시속에서 서로 교감하며 살아가고있어~!
    </h1>
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
  border-radius: 30px;
  margin: 50px auto;
  &-text {
    margin: 3rem auto -2rem;
    font-size: 3rem;
    letter-spacing: -2px;
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff80bf,
      0 0 82px #ff80bf, 0 0 92px #ff80bf, 0 0 102px #ff80bf, 0 0 151px #ff80bf;
  }
}
</style>
