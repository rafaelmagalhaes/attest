<template>
    <section class="flex-grid">
        <div class="col">
            <div class="sidebar">

                <sidebar v-for="(department,index) in departments" :key="index"
                         :departmentName="department.name"
                         @selectDepartment="selectDepartment(department)"
                         :selectedDepartment="selectedDepartment.name"
                />

            </div>
        </div>
        <div class="col">
            <div class="main">
                <div v-if="selectedDepartment">
                    <div class="badge">{{selectedDepartment.name}}</div>
                    <div class="pool" v-if="filteredQuestions && filteredQuestions.length">
                        <div v-for="question in filteredQuestions" style="width: 100%">
                            <p>{{question.title}}</p>

                            <div v-for="answers in question.answers" style=" position:relative; padding: 0.3rem;">
                                <poll :votes="answers.votes" :text="answers.text"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Poll from '@/components/Poll.vue'

    export default Vue.extend({
        components: {Sidebar, Poll},
        name: 'Main',
        props: {
            msg: String,
        },
        data() {
            return {
                selectedDepartment: {}
            }
        },
        mounted() {
            this.$store.dispatch('getDepartments');
            this.selectDepartment(this.departments[0]);
            this.$store.dispatch('getQuestions');

        },
        methods: {
            selectDepartment(department: any) {
                this.selectedDepartment = department
            }
        },
        computed: {
            questions(): Array<any> {
                return this.$store.getters.getQuestions;
            },
            filteredQuestions(): any {
                let obj: any = this.selectedDepartment;
                if (obj && obj.name) {
                    return this.questions.map((questions: any) => {
                        questions.answers.map((answers: any, index: any) => {
                            obj.responses.map((responses: any) => {
                                Object.keys(responses).forEach((key) => {
                                    if (key === answers.id) {
                                        answers.votes = responses[key]
                                    }
                                })
                            })
                        });
                        return questions
                    })
                }
            },
            departments(): Array<any> {
                return this.$store.getters.getDepartments
            }
        }
    })
</script>

<style>
    .flex-grid {
        display: flex;
        max-width: 1280px;
        justify-content: space-around;
        margin: 0 auto;
        padding: 5rem;
    }


    .sidebar {
        position: fixed;
        width: 300px;
        margin-left: -2rem;
    }

    .badge {
        background-color: #163d69;
        color: #ffff;
        display: inline-block;
        line-height: 16px;
        border-radius: 60px;
        font-size: 11px;
        padding: 0 8px;
        margin: 0 0 8px;
    }

    .main {
        padding: 2rem;
        border-radius: 5px;
        background: #ffff;
    }

    @media (max-width: 767px) {
        .flex-grid {
            display: block;
            padding: 0;
        }

        .col {
            width: 100%;
            margin: 0 0 10px 0;
        }

        .sidebar {
            margin-left: 0;
            position: relative;
        }

    }
</style>
