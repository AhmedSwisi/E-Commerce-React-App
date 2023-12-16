import { Grid, Typography, List } from "@mui/material";
import React, { useState } from "react";
import ReviewListItem from "./ReviewListItem";
import { getProductReviews } from "../firebase/utilities";

const ReviewList = ({setReviewLength, productID}) => {
    const [reviews, setReviews] = useState([])

    const fetchReviews = async () => {
        if (reviews.length === 0){
            const docs = await getProductReviews(productID)
            setReviews(docs)
            setReviewLength(docs.length)
        }
    }
    
    fetchReviews()

    return(
        <Grid item container  display={"flex"} gap={"30px"}>
            <List 
                sx={{
                    
                    gap:"30px",
                    width: '100%',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                }}
            >
            {reviews.length === 0 
            ? (<Typography>No Reviews Yet</Typography>) 
            :(<>{reviews.map((review) => <ReviewListItem review = {review} />)}</>)}
            </List>
        </Grid>
    )
}

export default ReviewList