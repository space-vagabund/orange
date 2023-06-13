import { BASE_URL } from "@/constants";
import { signInType } from "./types";
import axios from "axios";

interface test {
    members: string[]
    id: string
}
class LoginApi {
    readonly URL = BASE_URL;
    username = '';
    password = '';

    constructor({ username, password }: signInType){
        this.username = username;
        this.password = password;
    }

    public async signIn() {
        const userResponse = await axios.get(`${this.URL}/users?username=${this.username}&password=${this.password}`);
        if(userResponse?.data?.length) {
            const companyResponse = await axios.get(`${this.URL}/companies`)
            //console.log('companyResponse.data', companyResponse.data);
            const companyData = companyResponse.data.find((c: test) => c.members.includes(userResponse.data[0].id))
            //console.log('companyData', companyData);
            return { 
                data: { 
                    ...userResponse.data[0],
                    companyName: companyData.companyName,
                    companyId: companyData.id,
                } 
            }
        } else {
            return {
                data: {
                    error: "user can't find",
                }
            }
        }
    }
}

export default LoginApi