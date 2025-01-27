import { Commit } from "../types/RepoDetail";
import { RepoMetrics } from "../types/RepoMetrics";
import { RepoDetail } from "../types/RepoDetail";

export const extractRepoMetrics = (repo_detail: RepoDetail | null) => {
    const commitsByDay: {} = {};
    let approvedAcc: number = 0;

    if (!repo_detail || !repo_detail.commits) { return null; }

    repo_detail.commits.forEach((c: Commit) => { 
        if (c.approved) {
            approvedAcc++;
        }

        const commitDate = new Date(c.committer.date || 0);
        const dayKey = commitDate.toISOString().split('T')[0];

        if (!commitsByDay[dayKey]) { 
            commitsByDay[dayKey] = 0; 
        }

        commitsByDay[dayKey]++;
    });

    const sortedDates = Object.keys(commitsByDay).sort();
    const commitsXAxis = sortedDates.map(d => new Date(d));
    const commitsYAxis = sortedDates.map(d => commitsByDay[d]);
    
    const extract_information: RepoMetrics = {
        commits: {
            yData: commitsYAxis,
            xData: commitsXAxis,
            approved: approvedAcc, 
            unapproved: repo_detail?.commits.length - approvedAcc,
        },
        issues: {
            yData: [],
            xData: [],
            open: 0,
            total: 0,
        }
    };
    
    console.warn(extract_information);

    return extract_information || null;
}