import { BASE_URL } from "@/constants";
import { ForgotPasswordParamsType } from "./types";
import axios from "axios";

class ForgotPasswordApi {
    readonly URL = `${BASE_URL}/users`;
    username = '';
    newPassword = '';
    confirmPassword = '';
    
    constructor({ username, newPassword, confirmPassword }: ForgotPasswordParamsType){
        this.username = username;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }

    public async forgotPassword(){
        const user = await this.findUserToUpdate();
        if(!user || this.newPassword !== this.confirmPassword){
            return { 
                data: {
                    error: 'data incorrect'
                }
            }
        }

        const updatedUser = await axios.put(`${this.URL}/${user.id}`, {
            ...user,
            username: this.username,
            password: this.newPassword,
        })

        return updatedUser;
    }

    private async findUserToUpdate(){
        const response = await axios.get(`${this.URL}?username=${this.username}`)
        return response.data[0] || {}
    }
}

export default ForgotPasswordApi;
