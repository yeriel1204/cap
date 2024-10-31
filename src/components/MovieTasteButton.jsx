import React from "react";

function MovieTasteButton(props) {

    const selected = props.selected ? 'selected' : '';

    return(
        <div className="movie" onClick={props.onClick}>
            <img className = {selected} src={props.moviePoster} alt={props.movieTitle} />
            <h5 className="movieTitle">{props.movieTitle}</h5>
        </div>
    );
}

export default MovieTasteButton;