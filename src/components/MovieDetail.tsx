import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Movie } from "@/types/movie";

export type MovieDetailProps = {
  movie: Movie;
};

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`${process.env.REACT_APP_BASE_IMG_URL}/${movie.poster_path}`}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography gutterBottom variant="h5" component="div">
          {movie.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MovieDetail;
