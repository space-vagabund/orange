export type ModuleStateType = {
    username: string,
    password: string,
    companyName: string,
    companyPassword: string,
}

export type SetFormValuePayloadType = {
    key: 'username' | 'password' | 'companyName' | 'companyPassword',
    value: string
}