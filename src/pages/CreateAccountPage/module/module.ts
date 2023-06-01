import { Module } from "vuex";
import { ModuleStateType, setFormValuePayloadType } from "./types";
import { RootStateType } from "@/app/store";

const state: ModuleStateType = {
    username: '',
    password: '',
    companyName: '',
    companyPassword: ''
}

const module: Module<ModuleStateType, RootStateType> = {
    namespaced: true,
    state,
    mutations: {
        setFormValue(state, { key, value }: setFormValuePayloadType){
            state[key] += value;
        },
        clearFormFields(state){
            state.companyName = '';
            state.companyPassword = '';
            state.username = '';
            state.password = '';
        }
    },
    actions: {
        submitUserData({ commit, state, rootState }){
            return new Promise((resolve, reject) => {
                console.log('SUCCESS');
                resolve(true);
                commit('clearFormFields');
            })
        }
    },
    getters: {
        getCompanyName: (state) => state.companyName,
        getCompanyPassword: (state) => state.companyPassword,
        getUsername: (state) => state.username,
        getUserPassword: (state) => state.password,
    }
};

export default module;
