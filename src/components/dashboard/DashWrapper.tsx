import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid2"
import { CommitsPieChart } from "./CommitsPieChart.tsx";
import { Box, Typography } from "@mui/material";

import { fetchRepoDetail } from "../../network/fetchRepoDetail.ts";

import { DashLineChart } from "./DashLineChart.tsx";
import { RepoDescription } from "./RepoDescription.tsx";

import { RepoMetrics } from "../../types/RepoMetrics.ts";
import { RepoDetail } from "../../types/RepoDetail.ts"; 
import { extractRepoMetrics } from "../../scripts/ExtractRepoMetrics.ts";


export const DashWrapper = ({ basic }) => {
    const [ metrics, setMetrics ] = useState<RepoMetrics | null>(null);    
        
    useEffect(() => {
        const findMetrics = async() => {
            try {
                const repo_detail: RepoDetail | null = await fetchRepoDetail(basic);

                if (repo_detail) {
                    setMetrics(extractRepoMetrics(repo_detail));
                }
            } catch (error) {
                console.error(error);
            }
        }

        findMetrics();
    }, [ basic ]);
     
    return (
        <>
            { metrics ? 
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={5}>
                            <DashLineChart
                                xData={ metrics.commits.xData }
                                yData={ metrics.commits.yData }
                                lineColor={null}
                            />
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="h5">
                                Commits Approved
                            </Typography>
                            <CommitsPieChart 
                                approved={ metrics.commits.approved } 
                                unapproved={ metrics.commits.unapproved }
                            />
                        </Grid>
                        <Grid size={3}>
                            { basic && 
                                <RepoDescription 
                                    RepoDesc={ basic.description || '' } 
                                />
                            }
                        </Grid>
                        {/* <Grid size={5}> */}
                            {/* <DashLineChart
                                xData={ metrics.commits.xData }
                                yData={ metrics.commits.yData }
                                lineColor={'yellow'}
                            />
                        </Grid> */}
                    </Grid>            
                </Box>

                : <Typography variant="h4">No information to display</Typography>                
            }
        </>
    )
}