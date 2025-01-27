export type RepoBasic = {
    name: string,
    url: string,
    htmlUrl: string,
    description: string | null,

    owner: {
        login: string,
        avatarUrl: string, 
    },
}