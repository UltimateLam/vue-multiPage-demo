<script>
import components from "@/components";
export default {
  name: "app",
  render() {
    return (
      <div id="app">
        <input
          placeholder="page5"
          v-model={this.pageData5}
        />
        {this.pageData5}
        <components />
      </div>
    );
  },
  components: {
    components
  },
  data () {
    return {
      pageData5: ""
    }
  }
};
</script>
