import React from "react";
import { LineChart } from "@mui/x-charts";

export const DashLineChart = ({ yData, xData, lineColor }) => {
    return (
        <>
            { yData && xData &&
                <LineChart
                    xAxis={[{ 
                        data: xData, 
                        // dataKey: "date",
                        scaleType: 'time',
                        valueFormatter: (date) => {
                            const d = new Date(date);
                            const month = String(d.getMonth() + 1).padStart(2, '0');
                            const day = String(d.getDate() + 1).padStart(2, '0');
                            return `${month}/${day}`;
                        }   
                    }]}
    
                    series={[
                        {
                            data: yData,
                            color: lineColor || '#039487',
                            label: 'Commits',
                        
                            area: true,
                        },
                    ]}
    
                    yAxis={[{
                        colorMap: {
                            type: 'continuous',
                            max: Math.max(...yData)*2,
                            min: -Math.max(...yData)/3,
                            color: [ 'transparent', lineColor || '#039487']
                        }
                    }]}
                
                    height={320}
                />
            }
        </>
    );
}