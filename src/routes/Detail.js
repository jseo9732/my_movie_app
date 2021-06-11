import './Detail.css';

function Detail(props) {
  const { location, history } = props;
  const { poster, title, year, genres, summary } = location.state
  if (location.state === undefined) {
    history.push("/")
  }

  return (
    <div className="detail">
      <img src={poster} alt={title} title={title}/>
          <div className="detail_data">
            <h1 className="detail_title">{title}</h1>
            <h4 className="detail_year">{year}</h4>
            <ul className="detail_genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">
                        {genre} 
                    </li>
                ))}
            </ul>
            <p className="detail_summary">{ summary }</p>  
          </div>
    </div>
  );
}

export default Detail;
