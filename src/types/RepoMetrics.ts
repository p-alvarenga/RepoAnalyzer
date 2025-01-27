export type RepoMetrics = {
    commits: {
        xData: any, 
        yData: any,
        approved: number,
        unapproved: number,
    },
    issues: {
        xData: any, 
        yData: any,
        open: number,
        total: number,
    }
}