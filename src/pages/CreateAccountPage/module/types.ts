export type ModuleStateType = {
    username: string,
    password: string,
    companyName: string,
    companyPassword: string,
}

export type setFormValuePayloadType = {
    key: 'username' | 'password' | 'companyName' | 'companyPassword',
    value: string
}