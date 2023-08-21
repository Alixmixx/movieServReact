export interface MovieProps {
	title_english: string;
	id: string;
	year: string;
	genres: string[];
	rating: string;
	summary: string;
	medium_cover_image: string;
  }

export function Movie({movie}: {movie: MovieProps}) {
  return (
    <div key={movie.id}>
      <img src={movie.medium_cover_image} />
      <h2>
        {movie.title_english} {movie.year}
      </h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
