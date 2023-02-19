import SearchMovieForm from "@/containers/SearchMovieForm";
import SearchMovieContainer from "@/containers/SearchMovie";
import BaseLayout from "@/layouts/BaseLayout";
const MovieDetail = () => {
  return (
    <div>
      <BaseLayout>
        <SearchMovieForm />
        <SearchMovieContainer />
      </BaseLayout>
    </div>
  );
};

export default MovieDetail;
