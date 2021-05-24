<script>
export default {
  name: "view2",
  render() {
    return (
      <div class="router-link">
        <router-link to="/view1">Go to router-view 1</router-link>
        <b>router-view 2</b>
      </div>
    );
  }
};
</script>