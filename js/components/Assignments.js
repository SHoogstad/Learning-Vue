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
            homework: [
                { name: 'Finish Project' , complete: false,tag: 'Project', id: 1 },
                { name: 'Read a book' , complete: false, tag: 'Dutch', id: 2 },
                { name: 'Read a book v2' , complete: false, tag: 'Dutch', id: 3 },
                { name: 'Learn Vue 3' , complete: false , tag: 'Programming', id: 4 },
            ],
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