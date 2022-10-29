<template>
  <div
    className="color-element"
    @click="{saveColor}"
    style="{{backgroundColor:"
    props.palletElement}}
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: {
        
    },
    setup(props) {
        const elementStyle = {
            backgroundColor: props.pallet
        }
        return {

        };
    },
});
</script>
