import AssignmentList from "./AssignmentList.js";
import AppButton from "./AppButton.js";
import AssignmentCreate from "./AssignmentCreate.js";
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
            <assignmentCreate @add="add"></assignmentCreate>
        </section>
    `,

    components: { AssignmentList, AppButton, AssignmentCreate },

    data() {
        return {
            homework: [
                { name: 'Finish Project' , complete: false, id: 1 },
                { name: 'Read a book' , complete: false, id: 2 },
                { name: 'Learn Vue 3' , complete: false , id: 3 },
            ],
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
        add(name) {
            this.homework.push({
                name: name,
                complete: false,
                id: this.homework.length + 1
            });
        }
    }
}