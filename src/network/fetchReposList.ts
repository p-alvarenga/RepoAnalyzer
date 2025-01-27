// FETCH THE USER (?)
import { RepoBasic } from "../types/RepoBasic";

export const fetchReposList = async(user: string) => {
    try {
        const response = await fetch(`https://api.github.com/users/${user}/repos`);

        if (!response.ok) {
            throw new Error(`Failed to fetch for user: ${user}. Status: ${response.status}`);
        }

        const dataJson = await response.json();

        const repos: RepoBasic[] = dataJson.map((r: any) => ({
            id: r.id,
            name: r.name,
            htmlUrl: r.html_url,
            url: r.url,
            description: r.description,
        
            owner: {
                id: r.owner.id,
                login: r.owner.login,
                avatarUrl: r.owner.avatar_url
            }
        }));

        return repos;
    } catch (err) {
        /* !!!!!!!!!!!!!!!!!!! */
    }
}