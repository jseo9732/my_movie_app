import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movies'
import './Home.css';

function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovie = async () => {
        const data = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        setIsLoading(false);
        setMovies(data.data.data.movies);
    };
    
    useEffect(() => {
        getMovie();
    },[]);

    return (
      <div className="home">
        {isLoading ? 
            <div className="loading">
                <span className="loading_txt">Loading...</span>
            </div> :
            <div className="movies">
                {movies.map(movie => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    year={movie.year}
                    genres={movie.genres}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                />
            ))}
            </div>
        }
      </div>
    );
  }
  
  export default Home;