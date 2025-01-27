import { RepoBasic } from "./RepoBasic.ts"

export type RepoDetail = {
    basicInformation: RepoBasic,

    commits: Commit[],
    // issues: Issue[]
};

export type Commit = {
    approved: boolean,
    author: {
        login: string,
        avatarUrl: string,
        htmlUrl: string,
        name: string,
        email: string,
        date: any
    }, 
    committer: {
        login: string,
        avatarUrl: string,
        htmlUrl: string,
        name: string,
        email: string,
        date: any,
        msg: string, 
    }
};

export type Issue = {
    
};