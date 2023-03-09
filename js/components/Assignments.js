import AssignmentList from "./AssignmentList.js";
export default {
    template: `
        
        <assignmentList
            :assignments="inProgressHomework"
            title="In progress"
        ></assignmentList> 
        <assignmentList
            :assignments="completedHomework"
            title="Completed"
        ></assignmentList>
    `,

    components: { AssignmentList },

    data() {
        return {
            homework: [
                { name: 'Finish Project' , complete: false },
                { name: 'Read a book' , complete: false },
                { name: 'Learn Vue 3' , complete: false },
            ]
        }
    },

    computed: {
        completedHomework() {
            return this.homework.filter(a => a.complete)
        },

        inProgressHomework() {
            return this.homework.filter(a => ! a.complete)
        }
    }
}