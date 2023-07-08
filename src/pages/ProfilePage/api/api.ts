import axios from "axios";
import moment from 'moment';
import { BASE_URL, LOCAL_STORAGE_KEYS } from "@/constants";

export class ProfileApi {
    companyId = '';
    userId = '';

    constructor(companyId: string, userId:string){
        this.companyId = companyId
    }

    public logOut(){
        return new Promise((res, reject) => {
            localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_SESSION_KEY)
            res(true);
        })
    }

    public checkToken(loginCreatedDate: string){
        return moment(new Date()).diff(new Date(loginCreatedDate), 'days') < 6 
    }
}