<template>
  <div class="main-view">
    <HomeView></HomeView>
    <PersonView></PersonView>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "./HomeView.vue";
import PersonView from "./PersonView.vue";
export default defineComponent({
  components: {
    HomeView,
    PersonView,
  },
});
</script>
<style lang="scss">
.main-view {
  display: flex;
  flex-direction: column;
}
</style>
