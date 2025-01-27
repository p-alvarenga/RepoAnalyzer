import React from "react"
import { AppBar, Avatar, Box, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";

import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import Search from "@mui/icons-material/Search"

export const Navbar = ( { onSearch, avatarSrc } ) => {
    const handleSearchChange = (e) => {
        if (e && e.key === "Enter") {
            onSearch(e);
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ p: .1, boxShadow: 0}}>
                <Toolbar sx={{ 
                    marginX: 6,
                    justifyContent: 'space-between'
                }}>   
                    <TroubleshootOutlinedIcon
                        sx={{ 
                            color: 'primary.main',
                            width: 40,
                            height: 40,
                        }}
                    />

                    <TextField 
                        hiddenLabel
                        variant="outlined"
                        size="small"
                        margin="none"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search sx={{ color: 'primary.main'}}/>
                                    </InputAdornment>
                                ),
                            }
                        }}
                        onKeyDown={ (e) => handleSearchChange(e) }
                        placeholder="Search User"
                    >
                    <TroubleshootOutlinedIcon/>
                    </TextField>

                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                    }}>
                        <Avatar
                            sx={{ bgcolor: "darkgrey", m: 1}}
                            alt="p-alvarenga"
                            src={ avatarSrc || '' }
                        ></Avatar>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
} 
