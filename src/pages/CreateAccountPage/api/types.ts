export type CreateCompanyAndAdminPropsType = {
    companyName: string,
    companyPassword: string,
    username: string,
    userPassword: string,
}

export type CreateCompanyPropsType = {
    companyName: string,
    companyPassword: string,
    ownerId: string
}

export type CreateUserPropsType = {
    username: string,
    userPassword: string,
    role: ROLE_TYPE
}

export type ROLE_TYPE = 'OWNER' | 'TEAM_LEADER' | 'MEMBER';
