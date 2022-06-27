import { css } from "@emotion/react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { MovieActions } from "../store/slices/movies";

const primary = "#1976d2";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.movie);

  const newData = [...data, ...data, ...data, ...data, ...data];

  // const foo = useSelector((state) => state)
  // const exampleState = useAppSelector((state) => state.example);
  return (
    <Container maxWidth="sm">
      {newData.map((movie) => (
        <MovieCard imgUrl={movie.imgUrl} />
      ))}
    </Container>
  );
};

export default Home;
