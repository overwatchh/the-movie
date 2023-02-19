import { createBrowserRouter } from "react-router-dom";
import Home from "@/routers/Home";
import MovieDetail from "@/routers/MovieDetail";
import TopRated from "@/routers/TopRated";
import SearchMovie from "@/routers/SearchMovie";
import { PATH } from "@/constants";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.MOVIE_DETAIL,
    element: <MovieDetail />,
  },
  {
    path: PATH.TOP_RATED_MOVIES,
    element: <TopRated />,
  },
  {
    path: PATH.SEARCH_MOVIE,
    element: <SearchMovie />,
  },
]);

export default router;
