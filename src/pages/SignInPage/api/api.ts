import { BASE_URL } from "@/constants";
import { signInType } from "./types";
import axios from "axios";

class LoginApi {
    readonly URL = `http://localhost:3000/users`;
    username = '';
    password = '';

    constructor({ username, password }: signInType){
        this.username = username;
        this.password = password;
    }

    public async signIn() {
        const response = await axios.get(`${this.URL}?username=${this.username}&password=${this.password}`);
        if(response?.data?.length) {
            return { 
                data: { 
                    ...response,
                } 
            }
        } else {
            return {
                data: {
                    ...response,
                    error: "user can't find",
                }
            }
        }
    }
}

export default LoginApi