import { useState } from "react";
import MovieCard from "../components/MovieCard";
function Home(){
    const [searchQuery,setSearchQuery] = useState("");

    const movies = [
        {id:"1", title:"Life of Pi",release_date:"2020"},
        {id:"2", title:"The Matrix",release_date:"1999"},
        {id:"3", title:"Good Will hunting",release_date:"1989"}
    ];

const handleSearh = (e)=>{
    e.preventDefault();
};
    return(<div className="home">
        <form onSubmit={handleSearh} className="search-form">
            <input type="text"
             placeholder="Search for movies...." 
            className="search-input"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>


        <div className="movies-grid">{movies.map((movie)=>
            movie.title.toLowerCase().startsWith(searchQuery)
            &&(<MovieCard movie={movie} key={movie.id}/>))}</div>
    </div>);
}

export default Home;