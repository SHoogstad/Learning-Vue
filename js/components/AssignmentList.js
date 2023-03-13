import Assignment from "./Assignment.js";
import AssignmentAmount from "./AssignmentAmount.js";
import AppButton from "./AppButton.js";
export default {
    components: { Assignment, AssignmentAmount, AppButton },
    template: `
        <section v-show="assignmentsArray.length">
            <div class="flex justify-between">
                <h2 class="font-bold mb-2"> 
                    {{ title }}
                    <assignmentAmount :count="assignmentsArray.length"></assignmentAmount>
                </h2>
                <appButton @click="toggle" type="toggle" v-show="toggleAble">{{ show ? '&#94;' : '&#62;'}}</appButton>
            </div>
            <ul v-show="show">
                <Assignment 
                    v-for="assignment in assignmentsArray"
                    :key="assignment.id"
                    :assignment="assignment"
                ></Assignment>
            </ul>
        </section>
    `,
    data() {
        return {
            show: true,
        }
    },

    props: {
        assignmentsArray: Array,
        title: String,
        toggleAble: {type: Boolean, default: true},
    },

    computed: {
    },

    methods: {
        toggle() {

            if (this.show !== true) {
               return  this.show = true
            }


            if (this.show !== false){
               return  this.show = false
            }
        }
    }
}