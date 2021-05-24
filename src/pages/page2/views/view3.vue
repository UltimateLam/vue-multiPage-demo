<script>
export default {
  name: "view3",
  render() {
    return (
      <div class="router-link">
        <router-link to="/view4">Go to router-view 4</router-link>
        <a href="/page1.html#/view1">Go to router-view 1</a>
        <b>router-view 3</b>
      </div>
    );
  }
};
</script>

