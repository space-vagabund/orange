import { Module } from "vuex";
import { ModuleStateType, SetFormValuePayloadType } from "./types";
import { RootStateType } from "@/app/store";
import CreateAccountApi from "../api";

const state: ModuleStateType = {
    username: '',
    password: '',
    companyName: '',
    companyPassword: '',
}

const module: Module<ModuleStateType, RootStateType> = {
    namespaced: true,
    state,
    mutations: {
        setFormValue(state, { key, value }: SetFormValuePayloadType){
            state[key] = value;
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
            const createAccountService = new CreateAccountApi();
            return createAccountService.createCompanyAndAdmin({
                companyName: state.companyName,
                companyPassword: state.companyPassword,
                username: state.username,
                userPassword: state.password
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
