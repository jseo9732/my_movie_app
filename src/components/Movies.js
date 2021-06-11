import { Link } from 'react-router-dom';
import './Movie.css';

function Movies({ id, title, year, genres, summary, poster }) {
    return (
      <div className="movie">
        <Link to={{
          pathname: `/detail/${id}`,
          state:{
            poster,
            title,
            year,
            genres,
            summary
          }
        }}>
          <img src={poster} alt={title} title={title}/>
          <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">
                        {genre} 
                    </li>
                ))}
            </ul>
            <p className="movie_summary">{summary.length > 180 ? summary.slice(0,180) + "..." : summary}</p>  
          </div>
        </Link>
      </div>
    );
  }
  
  export default Movies;