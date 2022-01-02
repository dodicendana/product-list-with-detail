import React, { useState, useEffect } from 'react';
import { Navigate, Link } from "react-router-dom";
import getProductDetails from '../services/getProductDetails';

const ProductDetail = () => {
    const productId = window.location.pathname.substring(9, window.location.pathname.length);
    
    const [productDetails, setProductDetails] = useState({})
    const [commentText, setCommentText] = useState("")
    const [rating, setRating] = useState(0)

    useEffect(() => {
        getProductDetails(productId).then(response => {
            const res = response.data;

            let productReviews = JSON.parse(localStorage.getItem(productId));
            if(!productReviews) {
                localStorage.setItem(productId, JSON.stringify(res.product_reviews));
                productReviews = res.product_reviews;
            } else {
                let oldProductReview = productReviews;
                for(let idx = 0; idx < res.product_reviews.length; idx++) {
                    if(!oldProductReview.find((productReview) => productReview._id === res.product_reviews[idx]._id))
                        productReviews.push(res.product_reviews[idx]);
                }
                localStorage.setItem(productId, JSON.stringify(productReviews));
            }
            setProductDetails({
                ...res,
                product_reviews: productReviews
            });
        })
    }, []);
    
    if (!productId) {
        return <Navigate to="/" />
    }

    const addReview = () => {
        if(!commentText || rating < 1 || rating > 5)
            alert("Invalid Rating!");
        else {
            let productReviewList = productDetails.product_reviews;
                productReviewList.push({
                    "_id": "",
                    "review_productid": productId,
                    "review_details": commentText,
                    "review_rating": rating,
                })
            localStorage.setItem(productId, JSON.stringify(productReviewList));
            setProductDetails({
                ...productDetails,
                product_reviews: productReviewList
            });
        }

    }

    return (
        <div className="product-container">
            <div className="product header-container">
                <Link to="/">Back</Link>
            </div>
            <div className="product detail">
                <div className="product detail name">Name: {productDetails.product_name}</div>
                <div className="product detail price">Price: {productDetails.product_price}</div>
                <div className="product detail desc">Description: {productDetails.product_description}</div>
                <div  className="product detail comment-list-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Comment</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        {
                            productDetails && productDetails.product_reviews && productDetails.product_reviews.map((productReview, idx) => {
                                return (<tr key={idx}>
                                    <td>{productReview.review_details}</td>
                                    <td>{productReview.review_rating}</td>
                                </tr>)
                            })
                        }
                    </table>
                </div>
                <div  className="product detail comment-box">
                    <div className="product detail comment-label">Comments: </div>
                    <div className="product detail comment-input-container">
                        <input 
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                    </div>
                    <div className="product detail rating-input-container">
                        <input 
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                    <button onClick={() => addReview()}>Add Review</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;