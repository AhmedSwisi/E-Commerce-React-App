import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReviewListItem from "./ReviewListItem";
import { getProductReviews } from "../firebase/utilities";

const ReviewList = ({setReviewLength, productID}) => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const fetchReviews = async () => {
            setReviews(await getProductReviews(productID))
            console.log(reviews)
            setReviewLength(reviews.length)
        }
        fetchReviews()
    },)

    return(
        <Grid item container>
            {reviews.length === 0 
            ? (<Typography>No Reviews Yet</Typography>) 
            :(<>{reviews.map((review) => <ReviewListItem review = {review} />)}</>)}
        </Grid>
    )
}

export default ReviewList