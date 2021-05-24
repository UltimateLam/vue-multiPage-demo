<template>
  <div id="app">
    <input placeholder="page8"
           v-model="page8"/>
    <components :props-string="propsString"/>
  </div>
</template>

<script>
import components from "@/components";
export default {
  name: "app",
  computed: {
    page8: {
      get() {
        return this.$store.state.pageData.page8;
      },
      set(value) {
        this.$store.commit("SET_PAGEDATA", { index: 8, value });
      }
    }
  },
  components: {
    components
  },
  data () {
    return {
      propsString: "page8 string" 
    }
  }
};
</script>