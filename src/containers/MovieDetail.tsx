import { useParams } from "react-router-dom";
import MovieDetail from "@/components/MovieDetail";
import { useGetMovieByIdQuery } from "@/services/movie";

const MovieDetailContainer = () => {
  const { id } = useParams();
  const { data: movie } = useGetMovieByIdQuery(Number(id));
  return <div>{movie && <MovieDetail movie={movie} />}</div>;
};

export default MovieDetailContainer;
