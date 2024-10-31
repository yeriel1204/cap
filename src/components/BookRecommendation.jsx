import React from "react";

function BookRecommendation(props){
    return(
        <div className="book" onClick={props.onClick}>
            <img className="bookImage" src={props.bookImage} alt={props.bookTitle}></img>
            <h3>{props.bookTitle}</h3>
            <h5>{props.bookDescription}</h5>
        </div>
    )
}

export default BookRecommendation;