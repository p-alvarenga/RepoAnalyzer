import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const themePalette = {
    primary: {
        main: '#2ca', //'#cc2a47',
        mainDarker: '#077561',
        light: 'white', 
        dark: '#262127',
        contrastText: 'white'
    },
    secondary: {
        main: '#cc2a47',
        light: 'white', 
        dark: '#262127'
    }   
};

const theme = createTheme({
    palette: { 
        mode: 'dark', 
        ...themePalette 
    },

    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
            
                    style: {
                        ':hover': {
                            backgroundColor: themePalette.primary.mainDarker
                        }
                    }
                }
            ]
        }
    },
    
    spacing: 8,
    shape: {
        borderRadius: 3.5
    },

});

export default function AppTheme ({ children }) {
    return (<ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>);
};