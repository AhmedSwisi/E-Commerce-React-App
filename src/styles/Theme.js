import { createTheme, responsiveFontSizes } from "@mui/material";
import '@fontsource/roboto'
import '@fontsource/inter'
const theme = createTheme({
    fontFamily: [
        'Inter',
        'Roboto'
    ],
    typography:{
        h2:{
            color: "#201F1F",
            fontFamily: 'Inter',
            fontSize: '60px',
            fontStyle: 'normal',
            fontWeight: '800',
        },
        h5:{
            color:"#1D1D1D",
            fontFamily:"Roboto",
            fontSize:"36px",
            fontStyle:"normal",
            fontWeight:"700",
        },
        body3:{
            color:'rgba(32, 31, 31, 0.82)',
            textAlign: 'center',
            fontFamily:'roboto',
            fontSize: '12px',
            fontStyle: "normal",
            fontWeight: '400',
            lineHeight: 'normal'
        },
        description_header: {
            color:"black",
            fontFamily:'Roboto',
            fontSize:"24px",
            fontStyle:"normal",
            fontWeight: "700",
            lineHeight:"140%"
        },
        home_header:{
            color:"black",
            fontFamily:'Roboto',
            fontSize:"96px",
            fontStyle:"normal",
            fontWeight:"700",
            lineHeight:"98%"
        },
        price_text:{
            color:"black",
            textAlign: "left",
            fontFamily: "Roboto",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight:"120%"
        },
        card_header:{
            color:"#FFF",
            textAlign:"center",
            fontFamily:"Roboto",
            fontSize:"32px",
            fontStyle:"normal",
            fontWeight:800,
            lineHeight:"104.5%",
            
        },
        appbar_link:{
            fontFamily:'Roboto',
            fontSize:"16px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"150%"
        },
        footer_link:{
            fontFamily: 'Roboto',
            fontSize: "16px",
            fontStyle:"normal",
            fontWeight:"600",
            lineHeight:"150%"
        },
        credits:{
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '150%'
        },
        product_header:{
            color: "black",
            fontFamily: "Roboto",
            fontSize: "56px",
            fontStyle:"normal",
            fontWeight:700,
            lineHeight:"120%"
        },
        item_header: {
            color: "black",
            fontFamily:"Roboto",
            fontSize:"20px",
            fontStyle:"normal",
            fontWeight:"700",
            lineHeight:"140%"
        },
        fontFamily:[
            'Roboto'
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
        MuiToggleButton: {
            styleOverrides: {
                root:{
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: "white",
                        backgroundColor: 'black'
                      },
                    color:"black",
                    backgroundColor:"white",
                    fontFamily:'Roboto',
                    fontSize:'16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: "150%",
                    border: "1px solid var(--Black, #000)"
                    
            }
        }},
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
        MuiRating:{
            styleOverrides: {
                root: {
                    color:"black",
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
                    fontFamily:"Inter",
                    fontSize:"18px",
                    fontStyle:"normal",
                    fontWeight:"700",
                    lineHeight:"150%"
                },
                body3: {
                    color:"black",
                    textAlign: "left",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
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
        MuiList: {
            styleOverrides:{
                root:{
                    '& ul': { padding: 0 },
                    '&::-webkit-scrollbar': {
                        width: '0.4em'
                      },
                      '&::-webkit-scrollbar-track': {
                        borderLeft:"1.5px",
                        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                      },
                      '&::-webkit-scrollbar-thumb': {
                        width:"0.2em",
                        backgroundClip: "padding-box",
                        backgroundColor: 'black',
                        borderRadius:"5px",
                        outline: 'black'
                      }
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
        },
        MuiSlider: {
            styleOverrides: {
                root:{
                    "& .MuiSlider-thumb": {
                        borderRadius: "0%",
                        height: 20,
                        width: 3,
                      },
                      "& .MuiSlider-track": {
                        height:2
                      }
                }
            }
        }
        

    }
})

export default responsiveFontSizes(theme)