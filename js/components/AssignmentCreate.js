import AppButton from "./AppButton.js";
export default {
    components: { AppButton },
    template: `
        <form @submit.prevent="add" class="m-4 space-x-2"> 
            <input 
                v-model="newAssignment"
                class="text-black p-2" 
                id="new-assigment" 
                name="new-assignment"
                placeholder="new assignment"
                required
            >
            <input 
                v-model="assignmentTag"
                class="text-black p-2" 
                id="tag" 
                name="tag"
                placeholder="tag"
                required
            >
            <app-button> add </app-button>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
            assignmentTag: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', { name: this.newAssignment, tag: this.assignmentTag } )

            this.newAssignment = '';
            this.assignmentTag = '';
        }
    }

}