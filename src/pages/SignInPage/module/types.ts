export type ModuleStateType = {
    username: string,
    password: string,
}

export type setFormValuePayloadType = {
    key: 'username' | 'password',
    value: string
};
