import { useSearchMovieQuery } from "@/services/search";
import Movie from "@/components/Movie";
import { Movie as TMovie } from "@/types/movie";
import ViewType from "@/containers/ViewType";
import ViewWrapper from "@/containers/ViewWrapper";
import { useAppSelector } from "@/hooks/store";

const loadingData: TMovie[] = new Array(20).fill(0).map((_) => ({
  adult: false,
  backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
  genre_ids: [28, 12, 878],
  id: 505642,
  original_language: "en",
  original_title: "Black Panther: Wakanda Forever",
  overview:
    "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
  popularity: 4429.317,
  poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
  release_date: "2022-11-09",
  title: "Black Panther: Wakanda Forever",
  video: false,
  vote_average: 7.5,
  vote_count: 3194,
}));
const SearchMovieContainer = () => {
  const query = useAppSelector((state) => state.form.searchMovie.query);
  const { data, isLoading } = useSearchMovieQuery({
    page: 1,
    query,
  });
  return (
    <div className="NowPlayingMovies">
      <ViewType />
      {isLoading ? (
        <ViewWrapper>
          {loadingData.map((movie, index) => (
            <Movie key={movie.id + index} isLoading={isLoading} movie={movie} />
          ))}
        </ViewWrapper>
      ) : (
        <ViewWrapper>
          {data?.results.map((movie) => (
            <Movie key={movie.id} isLoading={isLoading} movie={movie} />
          ))}
        </ViewWrapper>
      )}
    </div>
  );
};

export default SearchMovieContainer;
