export type ModuleStateType = {
    username: string,
    newPassword: string,
    confirmPassword: string,
}

export type setFormValuePayloadType = {
    key: 'username' | 'newPassword' | 'confirmPassword',
    value: string
}