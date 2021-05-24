<script>
export default {
  render() {
    return (
      <div class="btn-box">
        <div class="props-string">{this.propsString}</div>
        {this.list.map(i => (
          <a
            class="btn"
            key={i}
            href={`page${i + 1}.html`}
          >
            <button>page{i + 1}</button>
          </a>
        ))}
      </div>
    );
  },
  props: {
    propsString: {
      type: String,
      default: "no porps string"
    }
  },
  data() {
    return {
      list: [...Array(8).keys()]
    };
  }
};
</script>

<style lang="scss" scoped>
.btn-box {
  margin-top: 20px;
  .props-string{
    margin-bottom: 20px;
  }
  .btn {
    &:not(:last-child) {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
</style>

