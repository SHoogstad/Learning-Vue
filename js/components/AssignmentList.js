import Assignment from "./Assignment.js";
import AssignmentAmount from "./AssignmentAmount.js";
export default {
    components: { Assignment, AssignmentAmount },
    template: `
        <section v-show="assignmentsArray.length">
        
            <h2 class="font-bold mb-2"> 
                {{ title }}
                <assignmentAmount :count="assignmentsArray.length"></assignmentAmount>
            </h2>
            <ul>
                <Assignment 
                    v-for="assignment in assignmentsArray"
                    :key="assignment.id"
                    :assignment="assignment"
                ></Assignment>
            </ul>
        </section>
    `,

    props: {
        assignmentsArray: Array,
        title: String,
    },
}