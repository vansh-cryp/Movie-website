import "../css/Favorites.css"
function Favorite(){
    return(
    <div className="favorites">
    <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to favorites and they will appear here!</p>
    </div>
    </div>);
}

export default Favorite;