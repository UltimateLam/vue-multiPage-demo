<template>
  <div id="app">
        <input
          placeholder="page4"
          :value="$store.state.pageData.page4"
          @input="handleInput"
        />
        <components />
      </div>
</template>

<script>
import components from "@/components";
export default {
  name: "app",
  components: {
    components
  },
  methods:{
    handleInput(e){
      this.$store.commit("SET_PAGEDATA", { index: 4, value: e.target.value })
    }
  }
};
</script>