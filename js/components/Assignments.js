import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
import tagButton from "./tagButton.js";
export default {
    template: `
        <section class="space-y-6">
            <div class="inline flex space-x-3">
                <tagButton
                    @tag="setTag"
                    v-for="tag in tags"
                    :currentTag="currentTag"
                    :key="tag"
                    :tag="tag"
                ></tagButton>
            </div>
        
            <assignmentList
                :assignmentsArray="inProgressHomework"
                title="In progress"
            ></assignmentList> 
            <assignmentList
                :assignmentsArray="completedHomework"
                title="Completed"
            ></assignmentList>
            <assignmentCreate @add="add"></assignmentCreate>
        </section>
    `,

    components: { AssignmentList, AssignmentCreate, tagButton },

    data() {
        return {
            homework: [],
            currentTag: '',
        }
    },

    computed: {
        completedHomework() {
            if( this.currentTag === '') {
                return this.homework.filter(a => a.complete)
            }
            return this.homework.filter(
                a => a.complete
                && a.tag === this.currentTag
            )
        },

        inProgressHomework() {
            if( this.currentTag === '') {
                return this.homework.filter(a => ! a.complete)
            }
            return this.homework.filter(
                a => ! a.complete
                && a.tag === this.currentTag
            )
        },

        tags() {
            return new Set(this.homework.map(a => a.tag).filter(a => a))
        },
    },
    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(data => {
                this.homework = data
            })
    },

    methods: {
        add(task) {
            this.homework.push({
                name: task.name,
                complete: false,
                tag: task.tag,
                id: this.homework.length + 1
            });
        },

        setTag(tag) {
            if (this.currentTag === tag){
                return this.currentTag = ''
            }
              return this.currentTag = tag;
        }
    }
}