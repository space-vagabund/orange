export type ModuleStateType = {
    username: string,
    password: string,
}

export type SetFormValuePayloadType = {
    key: 'username' | 'password',
    value: string
};
