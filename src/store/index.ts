import Vue from 'vue'
import Vuex from 'vuex'
import data from '../questions'
import DepartmentModel from './models/DepartmentModel'
import QuestionModel from './models/QuestionModels'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        questions: Array<QuestionModel>(),
        departments: Array<DepartmentModel>()
    },
    getters: {
        getQuestions: state => state.questions,
        getDepartments: state => state.departments
    },
    mutations: {
        setDepartments(state, payload) {
            state.departments = payload
        },
        setQuestions(state,payload){
            state.questions = payload
        }
    },
    actions: {
        getQuestions({commit}){
          commit('setQuestions',data.questions)
        },
        getDepartments({commit}) {
            let obj: any = data.departments;
            let sorted = Array<DepartmentModel>();
            Object.keys(obj).forEach((key, index) => {
                sorted.push(obj[key])
            });
            commit('setDepartments', sorted)
        }
    }
})
