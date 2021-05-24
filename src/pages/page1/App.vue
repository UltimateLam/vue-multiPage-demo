<script>
import components from "@/components";
export default {
  name: "app",
  render() {
    return (
      <div id="app">
        <input
          placeholder="page1"
          v-model={this.pageData1}
        />
        <components />
        <router-view />
      </div>
    );
  },
  computed:{
    pageData1:{
      get(){
        return this.$store.state.pageData.page1;
      },
      set(value){
        this.$store.commit("SET_PAGEDATA", { index: 1, value })
      }
    }
  },
  components: {
    components
  }
};
</script>

