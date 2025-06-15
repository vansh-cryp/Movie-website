const url = "https://api.themoviedb.org/3";
const API_KEY = "5aa154a4aac18d3a56a445ae584278ab";
export const getPopularMovies = async ()=>{
    const response = await fetch(`${url}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results
};

export const searchMovies = async (query)=>{
    const response = await fetch(`${url}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
};
