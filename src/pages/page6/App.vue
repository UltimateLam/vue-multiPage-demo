<template>
    <div id="app">
        <input placeholder="page6" v-model="pageData6" />
        {{dealPageData6}}
        <components />
    </div>
</template>

<script>
import components from "@/components";
export default {
    name: "app",
    components: {
        components
    },
    computed: {
        dealPageData6() {
            return this.pageData6 === ""
                ? ""
                : `computed string + ${this.pageData6}`;
        }
    },
    data() {
        return {
            pageData6: ""
        };
    }
};
</script>
