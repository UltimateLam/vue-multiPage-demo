<script>
export default {
  name: "view1",
  render() {
    return (
      <div class="router-link">
        <router-link to="/view2">Go to router-view 2</router-link>
        <a href="/page2.html#/view3">Go to router-view 3</a>
        <b>router-view 1</b>
      </div>
    );
  }
};
</script>

