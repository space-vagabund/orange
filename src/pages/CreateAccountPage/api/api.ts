import axios from "axios";
import { createCompanyAndAdminProps, createCompanyProps, createUserProps } from "./types";
import { COMPANY_ROLES } from "@/constants";

class CreateAccountApi {
    readonly BASE_URL = 'http://localhost:3000';
    readonly END_POINTS = {
        USERS: '/users',
        COMPANIES: '/companies'
    }
    private userId = '';
    private companyId = '';

    constructor(){}
    
    public async createCompanyAndAdmin({ 
        companyName, 
        companyPassword, 
        username, 
        userPassword
    }: createCompanyAndAdminProps) {
        const userResponse = await this.createUser({ username, userPassword, role: 'OWNER' });

        if(userResponse.data.isError){
            return {
                error: true
            }
        }

        const companyResponse = await this.createCompany({ 
            companyName, 
            companyPassword,
            ownerId: userResponse.data.id
        });

        if(userResponse.data.isError){
            return {
                error: true
            }
        }

        return { companyResponse, userResponse };
    }

    private async createCompany({ companyName, companyPassword, ownerId }: createCompanyProps){
        const isCompanyExist = await this.checkCompanyExits(companyPassword);

        if(isCompanyExist) {
            return { 
                data: {
                    isError: true, 
                    error: 'user already created'
                }
            }
        }

        const company = {
            companyName,
            companyPassword,
            id: `company_${new Date().getTime()}`,
            members: [ownerId]
        }

        const createCompanyResult = await axios.post(`${this.BASE_URL}${this.END_POINTS.COMPANIES}`, company);

        return createCompanyResult
    }

    public async createUser({ username, userPassword, role }: createUserProps) {
        const isUserExist = await this.checkUserExits(userPassword);

        if(isUserExist) {
            return { 
                data: {
                    isError: true, 
                    error: 'company already created'
                } 
            }
        }

        const user = {
            role,
            username,
            password: userPassword,
            id: `user_${new Date().getTime()}`,
        }
        
        const createUserResult = await axios.post(`${this.BASE_URL}${this.END_POINTS.USERS}`, user);

        return createUserResult;
    }

    private async checkUserExits(password: string){
        const response = await axios.get(`${this.BASE_URL}${this.END_POINTS.USERS}?password=${password}`)
        return !!response.data.length
    }

    private async checkCompanyExits(companyPassword: string){
        const response = await axios.get(
            `${this.BASE_URL}${this.END_POINTS.COMPANIES}?companyPassword=${companyPassword}
        `);
        return !!response.data.length
    }
}

export default CreateAccountApi;
