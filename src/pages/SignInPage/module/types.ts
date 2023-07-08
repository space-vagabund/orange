export type ModuleStateType = {
    username: string,
    password: string,
    needRemember: boolean
}

export type SetFormValuePayloadType = {
    key: 'username' | 'password',
    value: string
};
