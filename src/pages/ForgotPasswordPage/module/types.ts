export type ModuleStateType = {
    username: string,
    newPassword: string,
    confirmPassword: string,
}

export type SetFormValuePayloadType = {
    key: 'username' | 'newPassword' | 'confirmPassword',
    value: string
}