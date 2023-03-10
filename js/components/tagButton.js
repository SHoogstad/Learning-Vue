import appButton from "./AppButton.js";
export default {
    template: `
        <form 
            @submit.prevent="filterTag"
        > 
            <input
                type="hidden"
                v-model="tag"
                :id="tag" 
                :name="tag"
                required
            >
            <app-button
                :type=" tag === currentTag ? 'secondary' : 'primary'"
                class="p-2 border"
            >
                {{ tag }}
            </app-button>
        </form>
    `,
    components: { appButton },
    props: {
        tag: String,
        currentTag: String,
    },

    methods: {
        filterTag() {
            this.$emit('tag', this.tag)
        },
    }
}