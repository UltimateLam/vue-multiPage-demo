<script>
import components from "@/components";
export default {
    name: "app",
    render() {
        return (
            <div id="app">
                <input
                    placeholder="page7"
                    value={this.$store.state.pageData.page7}
                    onInput={this.handleInput}
                />
                <components props={{ propsString: "page7 string" }} />
            </div>
        );
    },
    components: {
        components
    },
    methods: {
        handleInput(e) {
            this.$store.commit("SET_PAGEDATA", {
                index: 7,
                value: e.target.value
            });
        }
    }
};
</script>