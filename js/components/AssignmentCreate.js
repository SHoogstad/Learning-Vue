import AppButton from "./AppButton.js";
export default {
    components: { AppButton },
    template: `
        <form @submit.prevent="add" class="m-4"> 
            <input 
                v-model="newAssignment"
                class="text-black p-2" 
                id="new-assigment" 
                name="new-assignment"
                placeholder="new assignment"
                required
            >
            <app-button> add </app-button>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment)

            this.newAssignment = '';
        }
    }

}