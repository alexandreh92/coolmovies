import { Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "../../components/MovieCard";

import { MovieActions } from "../../store/slices/movies";

import { HeaderContainer } from "./styles";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.movie);

  const newData = [...data, ...data, ...data, ...data, ...data];

  useEffect(() => {
    dispatch(MovieActions.getMovies());
  }, [dispatch]);

  return (
    <Container maxWidth="md" sx={{ paddingY: 10 }}>
      <HeaderContainer>
        <Typography
          variant="h3"
          component="h1"
          marginTop={2}
          fontWeight="bold"
          color="primary"
        >
          Movie Reviews
        </Typography>
      </HeaderContainer>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {newData.map((movie) => (
          <Grid item xs={2} sm={4} md={4} key={movie.id}>
            <MovieCard imgUrl={movie.imgUrl} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
