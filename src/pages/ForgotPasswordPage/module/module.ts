import { Module } from "vuex";
import { ModuleStateType, setFormValuePayloadType } from "./types";
import { RootStateType } from "@/app/store";

const state: ModuleStateType = {
    username: '',
    newPassword: '',
    confirmPassword: '',
}

const module: Module<ModuleStateType, RootStateType> = {
    namespaced: true,
    state,
    actions: {
        submitForgotPasswordData({ commit, state, rootState }){
            return new Promise((resolve, reject) => {
                console.log('SUCCESS');
                resolve(true);
                commit('clearFormFields');
            })
        }
    },
    mutations: {
        setFormValue(state, { key, value }: setFormValuePayloadType){
            state[key] += value;
        },
        clearFormFields(state){
            state.username = '';
            state.newPassword = '';
            state.confirmPassword = '';
        }
    },
    getters: {
        getUsername: (state) => state.username,
        getNewPassword: (state) => state.newPassword,
        getConfirmPassword: (state) => state.confirmPassword,
    }
}

export default module;
