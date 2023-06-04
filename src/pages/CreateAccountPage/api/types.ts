export type createCompanyAndAdminProps = {
    companyName: string,
    companyPassword: string,
    username: string,
    userPassword: string,
}

export type createCompanyProps = {
    companyName: string,
    companyPassword: string,
    ownerId: string
}

export type createUserProps = {
    username: string,
    userPassword: string,
    role: ROLE_TYPE
}

export type ROLE_TYPE = 'OWNER' | 'TEAM_LEADER' | 'MEMBER';
