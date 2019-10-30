import Vuex from 'vuex'
import {shallowMount, createLocalVue} from '@vue/test-utils'
import Main from '@/components/Main.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store action', () => {
    let actions: any;
    let store: any;
    let state: any;
    beforeEach(() => {
        actions = {
            getDepartments: jest.fn(),
            getQuestions: jest.fn()
        };
        state = {
            departments: []
        };
        store = new Vuex.Store({
            actions, state
        })
    });
    it('should call getDepartments actions', () => {
        shallowMount(Main, {store, localVue})
        expect(actions.getDepartments).toHaveBeenCalled();
    });
    it('add data to department ', () => {
        state.departments.push({
            "name": "ACE",
            "responses": [
                {
                    "dog": 50,
                    "cat": 37.5,
                    "none": 12.5
                },
                {
                    "tea": 25,
                    "coffee": 62.5,
                    "none": 12.5
                },
                {
                    "book": 87.5,
                    "ebook": 12.5
                }
            ]
        });
        expect(state.departments.length).toEqual(1)
    })
})
