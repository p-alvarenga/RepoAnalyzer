import React from "react" 

import { PieChart } from '@mui/x-charts/PieChart';

export const CommitsPieChart = ({ approved, unapproved }) => {
    return (
        <>
            { approved !== null && unapproved !== null ?
                <PieChart
                    series={[
                        {
                            data: [
                                { 
                                    id: 0, 
                                    value: approved, 
                                    label: 'Approved Commits',
                                    color: '#039487'
                                },
                                { 
                                    id: 1, 
                                    value: unapproved, 
                                    label: 'Unapproved Commits',
                                    color: '#f85149'
                                },
                            ],
                            highlightScope: { fade: 'global', highlight: 'item'},
                            faded: { innerRadius: 60, additionalRadius: -5, color: 'gray'},
                            paddingAngle: 1,
                            innerRadius: 55,
                            cornerRadius: 5,
                        }   
                    ]}
                    width={300}
                    height={300}
                />
                : 
                <h1>No PieChart data to Display</h1>
            }
        </>
    )
}   