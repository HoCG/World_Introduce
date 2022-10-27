<template>
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
<style scoped>
.walk-space {
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background: #fff;
  width: 2000px;
  height: 800px;
  margin: 50px auto;
}
</style>
