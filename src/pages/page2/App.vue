<template>
  <div id="app">
    <input placeholder="page2"
           v-model="pageData2" />
    <components />
    <router-view />
  </div>
</template>

<script>
import components from "@/components";
export default {
  name: "app",
  computed:{
    pageData2:{
      get(){
        return this.$store.state.pageData.page2;
      },
      set(value){
        this.$store.commit("SET_PAGEDATA", { index: 2, value })
      }
    }
  },
  components: {
    components
  }
};
</script>
