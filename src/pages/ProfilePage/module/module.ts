import { Module } from "vuex";
import { IBaseUserData, ModuleStateType } from "./types";
import { RootStateType } from "@/app/store";

const state: ModuleStateType = {
    userData: null
}

const module: Module<ModuleStateType, RootStateType> = {
    namespaced: true,
    state,
    actions: {},
    mutations: {
        setUserData(state, payload: IBaseUserData){
            state.userData = payload
        }
    },
    getters: {
        getUserData: (state) => state.userData,
    }
}

export default module;
