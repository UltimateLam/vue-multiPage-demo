<script>
import components from "@/components";
export default {
  name: "app",
  render() {
    return (
      <div id="app">
        <input
          placeholder="page3"
          value={this.$store.state.pageData.page3}
          onInput={this.handleInput}
        />
        <components />
      </div>
    );
  },
  components: {
    components
  },
  methods:{
    handleInput(e){
      this.$store.commit("SET_PAGEDATA", { index: 3, value: e.target.value })
    }
  }
};
</script>
