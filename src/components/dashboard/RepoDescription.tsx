import { Box, Typography } from "@mui/material";
import React from "react"

export const RepoDescription = ({ RepoDesc }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingX: 4,
            paddingY: 3,
            gap: 2,
            border: 1,
            borderRadius: 2,
            borderColor: 'primary.mainDarker'
        }}>
            <Typography variant="h6">Description</Typography>  
            <Typography variant="body1">{ RepoDesc || 'No description' }</Typography>
        </Box>
    );
};