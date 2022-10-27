<template>
  <div class="walk-space">
    <img src="../assets/city_img.jpg" />
    <WalkPerson
      :person="person"
      v-for="[index, person] in personArr"
      :key="index"
    ></WalkPerson>
  </div>
</template>
<script lang="ts">
import { personStore } from "../stores/personStore";
import WalkPerson from "@/components/persons/WalkPerson.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    WalkPerson,
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
