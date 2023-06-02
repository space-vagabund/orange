import { Module } from "vuex";
import { ModuleStateType, setFormValuePayloadType } from "./types";
import { RootStateType } from "@/app/store";

const state: ModuleStateType = {
    username: '',
    password: '',
}

const module: Module<ModuleStateType, RootStateType> = {
    namespaced: true,
    state,
    mutations: {
        setFormValue(state, { key, value }: setFormValuePayloadType ){
            console.log({ key, value })
            state[key] += value
        },
        clearFormFields(state){
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
        getUsername: (state) => state.username,
        getPassword: (state) => state.password,
    },
}

export default module;
