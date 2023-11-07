import { createTheme, responsiveFontSizes} from "@mui/material";
import '@fontsource/roboto'
const theme = createTheme({
    typography:{
        appbar_link:{
            fontFamily:'roboto',
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"150%"
        },
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
                body1: {
                    fontFamily:"roboto",
                    fontSize:"16px",
                    fontStyle:"normal",
                    fontWeight:400,
                    lineHeight: "150%",

                },
                body2:{
                    color:"#000",
                    textAlign:"center",
                    fontFamily:"inter",
                    fontSize:"18px",
                    fontStyle:"normal",
                    fontWeight:"700",
                    lineHeight:"150%"
                },
                h3:{
                    fontSize: 48,
                    fontStyle:"normal",
                    fontWeight:700,
                    color: "black",
                    fontFamily: "roboto"
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                
                colorPrimary:{
                    backgroundColor:"White",
                    color:"black",
                    
                },
                root: {
                    height:"72px"
                }
            }
        }
        

    }
})

export default responsiveFontSizes(theme)