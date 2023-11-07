import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref} from "firebase/storage";
import { Box } from "@mui/material";

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
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"} margin={"auto"} >
            {image ? <img src={image} alt=""/> : "Loading image"}
        </Box>
    )
}

export default NotFoundPage;