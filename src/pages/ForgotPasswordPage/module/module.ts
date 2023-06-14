import { Module } from "vuex";
import { ModuleStateType, SetFormValuePayloadType } from "./types";
import { RootStateType } from "@/app/store";
import ForgotPasswordApi from "../api";

const state: ModuleStateType = {
    username: '',
    newPassword: '',
    confirmPassword: '',
}

const module: Module<ModuleStateType, RootStateType> = {
    namespaced: true,
    state,
    actions: {
        submitForgotPasswordData({ state: { username, newPassword, confirmPassword } }){
            const ForgotPasswordServes = new ForgotPasswordApi({
                username,
                newPassword,
                confirmPassword,
            });

            return ForgotPasswordServes.forgotPassword();
        }
    },
    mutations: {
        setFormValue(state, { key, value }: SetFormValuePayloadType){
            state[key] = value;
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
