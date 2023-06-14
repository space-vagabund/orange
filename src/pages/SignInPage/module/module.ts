import { Module } from "vuex";
import { ModuleStateType, SetFormValuePayloadType } from "./types";
import { RootStateType } from "@/app/store";
import LoginApi from "../api";

const state: ModuleStateType = {
    username: '',
    password: '',
}

const module: Module<ModuleStateType, RootStateType> = {
    namespaced: true,
    state,
    mutations: {
        setFormValue(state, { key, value }: SetFormValuePayloadType ){
            state[key] = value;
        },
        clearFormFields(state){
            state.username = '';
            state.password = '';
        }
    },
    actions: {
        submitUserData({ state: { username, password } }){
            const LoginServes = new LoginApi({ username, password });
            return LoginServes.signIn();
        }
    },
    getters: {
        getUsername: (state) => state.username,
        getPassword: (state) => state.password,
    },
}

export default module;
