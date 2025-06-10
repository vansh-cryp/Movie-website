function MovieCard({movie}){

    function onLike(){
        alert("clicked");
    }
    return(<div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-button" onClick={onLike}>hello</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_year}</p>
        </div>
        </div>);
}

export default MovieCard;