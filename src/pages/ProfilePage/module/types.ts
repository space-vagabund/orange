export type ModuleStateType = {
    userData: IBaseUserData | null
}

export interface IBaseUserData {
    companyId: string
    companyName: string
    id: string
    loginTime: number
    password: string
    role: string
    username: string
}