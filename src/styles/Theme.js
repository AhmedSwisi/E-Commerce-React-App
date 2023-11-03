import { createTheme, responsiveFontSizes} from "@mui/material";
import '@fontsource/roboto'
const theme = createTheme({
    typography:{
        fontFamily:[
            'roboto'
        ]
    },
    palette: {
        primary:{
            main:"#000"
        },
        secondary: {
            main:"#FFF"
        }
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius:8,
                    
                }
                
            }
        },
        MuiInputLabel: {
            styleOverrides:{
                root: {
                    color: "black",
                    fontSize: 16,
                    fontStyle:"normal",
                    fontWeight: 400,
                    fontFamily: 'roboto'
                }
            }
        },
        MuiTypography: {
            styleOverrides:{
                h3:{
                    fontSize: 48,
                    fontStyle:"normal",
                    fontWeight:700,
                    color: "black",
                    fontFamily: "roboto"
                }
            }
        }
        

    }
})

export default responsiveFontSizes(theme)