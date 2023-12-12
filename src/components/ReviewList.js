import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ReviewListItem from "./ReviewListItem";
import { getProductReviews } from "../firebase/utilities";

const ReviewList = ({setReviewLength, productID}) => {
    const [reviews, setReviews] = useState([])

    const fetchReviews = async () => {
        if (reviews.length === 0){
        setReviews(await getProductReviews(productID))
        setReviewLength(reviews.length)
        }
    }
    
    fetchReviews()

    return(
        <Grid item container>
            {reviews.length === 0 
            ? (<Typography>No Reviews Yet</Typography>) 
            :(<>{reviews.map((review) => <ReviewListItem review = {review} />)}</>)}
        </Grid>
    )
}

export default ReviewList