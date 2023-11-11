import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref} from "firebase/storage";
import { Box, Typography, Grid } from "@mui/material";
import styled from "styled-components";
import '@fontsource/inter/800.css' 

const ZeroBoxContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
})
const LowerZeroBox = styled(Box)({
    borderRadius:'20px',
    position: 'absolute',
})

const UpperZeroBox = styled(Box)({
    borderRadius:'20px',
    position: 'relative',
    bottom: '20px'
})

const SVGLineContainter = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    width: '900px',
    height: '288px',
    flexShrink: '0'
})

const SVGFirstLiquidsContainter = styled(Box)({
    display: 'flex',
    position: 'absolute',
    width: '380px',
    height: '240px',
    flexShrink: '0'
})

const SVGSecondLiquidsContainter = styled(Box)({
    display: 'flex',
    paddingTop: '20px',
    position: 'absolute',
    width: '294px',
    height: '186px',
    flexShrink: '0'
})

const SVGThirdLiquidsContainter = styled(Box)({
    display: 'flex',
    paddingTop: '40px',
    position: 'absolute',
    width: '212px',
    height: '134px',
    flexShrink: '0'
})

const SVGFourthLiquidsContainter = styled(Box)({
    display: 'flex',
    paddingTop: '60px',
    position: 'absolute',
    width: '114px',
    height: '72px',
    flexShrink: '0'
})

const SVGLargeOvalContainer = styled(Box)({
    display: 'flex',
    position: 'absolute',
    width:'100px',
    height:'100px',
    flexShrink: '0'
})

const SVGMediumOvalContainer = styled(Box)({
    display: 'flex',
    position: 'absolute',
    width:'100px',
    height:'100px',
    flexShrink: '0'
})

const SVGSmallOvalContainer = styled(Box)({
    display: 'flex',
    position: 'absolute',
    width:'34px',
    height:'34px',
    flexShrink: '0'
})

//{image ? <img src={image} alt=""/> : "Loading image"}
const storage = getStorage();
const getImage = async (location) =>{
    const  imageUrl = await getDownloadURL(ref(storage, location))
    return imageUrl
}

const NotFoundPage = (props) => {
    const [image, setImage] = useState();
    useEffect(() => {
        const fetchImage = async () =>{
            const image = await getImage('gs://e-commerce-project-60813.appspot.com/404 picture.png')
        setImage(image);
        }
        fetchImage()
    }, [])
    return(
        <Grid container direction="column" alignContent="center" spacing={1} justifyContent={"center"}>
            <Grid item>
                <SVGLineContainter>
                            <svg xmlns="http://www.w3.org/2000/svg" width="904" height="292" viewBox="0 0 904 292" fill="none">
                            <path d="M2 290C2 290 157.123 241.098 239.544 192.026C321.966 142.953 276.716 123.666 347.512 84.2873C418.308 44.9086 354.547 -30.8688 552.814 17.7758C751.082 66.4204 902 220.33 902 220.33" 
                            stroke="#6A9360" 
                            stroke-width="4" 
                            stroke-linecap="round"/>
                            </svg>
                </SVGLineContainter>
                <SVGLargeOvalContainer>
                
                </SVGLargeOvalContainer>
                <SVGMediumOvalContainer>
                
                </SVGMediumOvalContainer>
                <SVGSmallOvalContainer>
                
                </SVGSmallOvalContainer>
            </Grid>
            <Grid item>
                    <Box display = 'flex'flexDirection={'row'} alignContent={'center'} justifyContent={'center'}>
                        <SVGFirstLiquidsContainter>
                            <svg xmlns="http://www.w3.org/2000/svg" width="385" height="245" viewBox="0 0 385 245" fill="none">
                                <path d="M27.4955 149.459C116.224 209.586 273.865 262.165 343.904 235.773C413.942 209.382 373.354 72.5205 343.904 33.4266C314.453 -5.66718 213.826 1.69139 163.099 7.18775C112.372 12.6841 -61.2325 89.3308 27.4955 149.459Z" stroke="#E26C56" stroke-width="4"/>
                            </svg>
                        </SVGFirstLiquidsContainter>
                        <SVGSecondLiquidsContainter>
                            <svg xmlns="http://www.w3.org/2000/svg" width="298" height="190" viewBox="0 0 298 190" fill="none">
                                <path d="M20.8735 115.453C89.521 162.052 211.486 202.8 265.673 182.347C319.861 161.893 288.459 55.8257 265.673 25.528C242.888 -4.76969 165.035 0.933199 125.788 5.19288C86.5408 9.45256 -47.7739 68.8537 20.8735 115.453Z" stroke="#E26C56" stroke-width="3"/>
                            </svg>
                        </SVGSecondLiquidsContainter>
                        <SVGThirdLiquidsContainter>
                        <svg xmlns="http://www.w3.org/2000/svg" width="215" height="137" viewBox="0 0 215 137" fill="none">
                            <path d="M15.5131 83.6694C65.014 117.241 152.962 146.597 192.035 131.862C231.109 117.126 208.466 40.7123 192.035 18.8849C175.605 -2.94248 119.466 1.16606 91.1655 4.23486C62.865 7.30366 -33.9878 50.098 15.5131 83.6694Z" stroke="#E26C56" stroke-width="2"/>
                        </svg>
                        </SVGThirdLiquidsContainter>
                        <SVGFourthLiquidsContainter>
                        <svg xmlns="http://www.w3.org/2000/svg" width="116" height="74" viewBox="0 0 116 74" fill="none">
                            <path d="M8.10666 44.7739C34.7251 62.8122 82.0176 78.5857 103.029 70.6682C124.041 62.7508 111.864 21.6924 103.029 9.96427C94.194 -1.76388 64.0059 0.443695 48.7877 2.0926C33.5695 3.74151 -18.5118 26.7355 8.10666 44.7739Z" stroke="#E26C56"/>
                        </svg>
                        </SVGFourthLiquidsContainter>
                        <Typography sx={{
                            transform: 'rotate(-15deg)',
                            color:'#201F1F',
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '320px',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            lineHeight:'330px'
                        }}>
                            4
                        </Typography>
                        <ZeroBoxContainer>
                            <LowerZeroBox>
                                <Typography sx={{
                                    color:'#201F1F',
                                    textAlign: 'center',
                                    fontFamily: 'Inter',
                                    fontSize: '320px',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    lineHeight:'330px'
                                }}>
                                    0
                                </Typography>
                            </LowerZeroBox>
                            <UpperZeroBox>
                                <Typography fontWeight = {800}sx={{
                                    color:'#D8504F',
                                    textAlign: 'center',
                                    fontFamily: 'Inter',
                                    fontSize: '320px',
                                    fontStyle: 'normal',
                                    fontWeight: 800,
                                    lineHeight:'330px'
                                }}>
                                    0
                                </Typography>
                            </UpperZeroBox>
                        </ZeroBoxContainer>
                        <Typography sx={{
                            transform: 'rotate(15deg)',
                            color:'#201F1F',
                            fontFamily: 'Inter',
                            textAlign: 'center',
                            fontSize: '320px',
                            fontStyle: 'normal',
                            fontWeight: 800,
                            lineHeight:'330px'
                        }}>
                            4
                        </Typography>
                    </Box>
            </Grid>
            <Grid item>
                <Typography  variant="h2">
                Oops, This Page Could Not Be Found.
                </Typography>
            </Grid>
            <Grid item>
                <Typography display={"flex"} variant="body3" justifyContent={"center"}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default NotFoundPage;