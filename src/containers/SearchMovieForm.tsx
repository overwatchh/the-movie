import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { submitSearchMovie } from "@/store/slices/form";
import _ from "lodash";

const SearchMovieForm = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.form.searchMovie.query);
  const handleChange = _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    dispatch(submitSearchMovie({ query }));
  }, 1000);
  return (
    <Paper
      component="form"
      sx={{ my: 3, display: "flex", alignItems: "center", width: "100%" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search movies"
        inputProps={{ "aria-label": "search movies" }}
        onChange={handleChange}
        defaultValue={query}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchMovieForm;
