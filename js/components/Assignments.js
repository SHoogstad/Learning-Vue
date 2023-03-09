import AssignmentList from "./AssignmentList.js";
import AppButton from "./AppButton.js";
export default {
    template: `
        <section class="space-y-6">
            <assignmentList
                :assignments="inProgressHomework"
                title="In progress"
            ></assignmentList> 
            <assignmentList
                :assignments="completedHomework"
                title="Completed"
            ></assignmentList>
        </section>
        
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

    components: { AssignmentList, AppButton },

    data() {
        return {
            homework: [
                { name: 'Finish Project' , complete: false, id: 1 },
                { name: 'Read a book' , complete: false, id: 2 },
                { name: 'Learn Vue 3' , complete: false ,id: 3 },
            ],

            newAssignment: '',
        }
    },

    computed: {
        completedHomework() {
            return this.homework.filter(a => a.complete)
        },

        inProgressHomework() {
            return this.homework.filter(a => ! a.complete)
        }
    },

    methods: {
        add() {
            this.homework.push({
                name: this.newAssignment,
                complete: false,
                id: this.homework.length + 1
            });

            this.newAssignment = '';
        }
    }
}