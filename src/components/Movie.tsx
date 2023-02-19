import TMDBImage from "@/components/assests/TMDB.png";
import { useAppSelector } from "@/hooks/store";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Movie } from "@/types/movie";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { ViewType as EViewType } from "@/types/display";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cln from "classnames";

export type MovieProps = {
  movie: Movie;
  isLoading: boolean;
};

const MovieComponent: React.FC<MovieProps> = ({ movie, isLoading }) => {
  const viewType = useAppSelector((state) => state.display.view);
  const navigate = useNavigate();
  const handleViewDetail = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div
      onClick={handleViewDetail}
      className={cln("card", {
        "grid-item": viewType === EViewType.grid,
      })}
    >
      <Box sx={{ mb: 3 }} />
      <Card>
        {!isLoading ? (
          <>
            <LazyLoadImage
              alt={movie.title}
              height={140}
              src={
                movie.poster_path
                  ? `${process.env.REACT_APP_BASE_IMG_URL}/${movie.poster_path}`
                  : TMDBImage
              }
              width={"100%"}
              className="lazy-img"
            />
          </>
        ) : (
          <Skeleton variant="rectangular" height={140} />
        )}
        <CardContent>
          {!isLoading ? (
            <Typography gutterBottom variant="h5" component="div">
              {movie.original_title} ({movie.vote_average}/10 from{" "}
              {movie.vote_count} votes)
            </Typography>
          ) : (
            <Skeleton variant="rectangular" height={32} width={360} />
          )}
          {!isLoading ? (
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          ) : (
            <>
              <Box sx={{ mt: 1.5 }} />
              <Skeleton variant="rectangular" height={64} />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieComponent;
