import React, { useEffect, useState } from "react";
import { Box, Stack, Link, Button, Avatar, Tooltip, Typography } from "@mui/material";

import { fetchReposList } from "../network/fetchReposList.ts"
import { RepoBasic } from "../types/RepoBasic.ts"

export const ReposBox = ({ user, onRepoSelect }) => {
    const [ repoStack, setRepoStack ]: [ RepoBasic[], any] = useState([]);
    
    useEffect(() => {
        const fetch = async() => {
            try {
                const fetchedRepo: RepoBasic[] | any = await fetchReposList(user);

                if (fetchedRepo.length >= 1) {
                    setRepoStack(fetchedRepo);
                } else {
                    setRepoStack([]);
                }
            } catch (e) {
                setRepoStack([]);
            }
        }

        fetch();
    }, [ user ]);

    return (
        <Box sx={{
                display: 'flex', 
                flexDirection: 'column',
                marginTop: 10,
                p: 2, 
                maxWidth: 'fit-content',
                maxHeight: '50vh',
                overflowY: 'auto',
                backgroundColor: 'primary.dark',
                border: 1,
                borderColor: 'primary.mainDarker',
                borderRadius: 2,
                gap: 1,
            }}
        >
            <Stack spacing={1.2} direction="column" justifyContent="center">
                { repoStack && repoStack.length > 0 ? (
                    repoStack.map((r: RepoBasic, i: number) => (
                        <Box key={i} sx={{ display: 'flex', gap: 1}}>
                            <Tooltip title={ r.owner.login } >
                                <Avatar src={r.owner.avatarUrl}/>
                            </Tooltip>

                            <Button 
                                variant='outlined'
                                size='small'
                                sx={{ minWidth: '12.5vw' }}
                                onClick={ () => onRepoSelect(r)}
                            >
                                { r.name || 'unknown repository name' }
                            </Button>
                        </Box>   
                    )) 
                ) : ( // if error. treat here better!
                    <Typography variant="h6">error</Typography>
                )}
            </Stack>
        </Box>
    );
}