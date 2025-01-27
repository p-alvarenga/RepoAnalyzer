import { RepoBasic } from "../types/RepoBasic"
import { Commit, RepoDetail } from "../types/RepoDetail";

const fetchRepoDetail = async(basic: RepoBasic): Promise<RepoDetail | null> => {
    try {
        if (!basic) { return null; }
        
        //if (!valid url)
        //  throw new Error()

        const fetchedCommits: Commit[] | any = await fetchCommits(`${ basic.url }/commits`);

        if (fetchedCommits === null) { return null; }

        const repo_detail: RepoDetail = {
            basicInformation: basic,
            commits: fetchedCommits,
        }

        return repo_detail;
    } catch (err) {
        console.error(err);
    }

    return null;
}

const fetchCommits = async(url: string) => {
    try {
        const response = await fetch(url);  
        const dataJson = await response.json();

        if (dataJson) {
            const commits: Commit[] = dataJson.map((c: any) => ({
                approved: c.commit.verification.verified,
                
                author: c.author ? {
                    login: c.author.login,
                    avatarUrl: c.author.avatar_url,
                    htmlUrl: c.author.html_url,
                    name: c.commit.author.name,
                    email: c.commit.author.email,
                    date: c.commit.author.date,
                } : {
                    login: "unknown",
                    avatarUrl: "", 
                    htmlUrl: '#',
                    name: c.commit.author.name || "unknown",
                    email: c.commit.author.email || "unknown",
                    date: ' ',
                },  

                committer: c.committer ? {
                    login: c.committer.login,
                    avatarUrl: c.committer.avatar_url,
                    htmlUrl: c.committer.html_url,
                    name: c.commit.committer.name || "unknown",
                    email: c.commit.committer.email || "unknown",
                    date: c.commit.committer.date,
                    msg: c.commit.committer.message,
                } : {
                    login: "unknown",
                    avatarUrl: "", 
                    htmlUrl: '#',
                    name: c.commit.committer.name || "unknown",
                    email: c.commit.committer.email || "unknown",
                    msg: c.commit.committer.message || "unknown",
                    date: c.commit.committer.date || "",
                },
            })) 
        
            return commits;
        }

        return null;
    } catch (err) {
        console.error(`Got error in fetchCommits = ${err}`);
    }
}

const fetchIssues = () => { return null; }

export { fetchRepoDetail };