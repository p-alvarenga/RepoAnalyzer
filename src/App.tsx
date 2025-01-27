import React, { useState } from "react";
import { Box, CssBaseline, Typography } from "@mui/material"
import { Navbar } from "./components/Navbar.tsx"

import AppTheme from "./theme/index.tsx";
import { ReposBox}  from "./components/ReposBox.tsx";
import { DashWrapper } from "./components/dashboard/DashWrapper.tsx";
import { RepoBasic } from "./types/RepoBasic.ts";
import Grid from "@mui/material/Grid2";


const App = () => {
    const [ User, setUser ]: [ string, any ] = useState("p-alva");
    const [ basic, setBasic]: [ any, any ] = useState(null);

    const handleSearch = (ev: any) => {
        const query = ev.target.value;
    
        if (query && query !== '')
            setUser(query);
    }

    const handleRepoSelect = (r: RepoBasic ) => {  
        setBasic(r);
    }

    return (
        <AppTheme>
            <CssBaseline/>

            <Navbar 
                onSearch={ handleSearch }
                avatarSrc={ basic?.owner.avatarUrl || null }
            />
            
            <Box sx={{ flexGrow: 1, marginTop: 12, marginX: 8 }}>
                <Typography variant="h2">{ basic?.name ? basic.name : ''}</Typography>
                
                <Grid container spacing={ 2 }>
                    <Grid size={ 3 }>
                        <ReposBox user={ User } onRepoSelect={ handleRepoSelect }/>
                    </Grid>
                    <Grid size={ 9 }>
                        <DashWrapper basic={ basic }/>
                    </Grid>
                </Grid>
            </Box>
        </AppTheme>
    );
}

export default App;