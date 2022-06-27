import {
  Card,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/AddCircle";

import MovieCard from "../../components/MovieCard";
import BaseLayout from "../../layouts/BaseLayout";

import { ReviewActions } from "../../store/slices/reviews";

import { HeaderContainer, StyledIconButton } from "./styles";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(ReviewActions.getReviews());
  }, [dispatch]);

  return (
    <BaseLayout>
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
        <Grid item xs={2} sm={4} md={4}>
          <Card
            raised
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledIconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AddIcon />
            </StyledIconButton>
            <Typography
              variant="h6"
              component="h1"
              marginTop={2}
              fontWeight="bold"
              color="primary"
            >
              Add Review
            </Typography>
          </Card>
        </Grid>
        {data.map((review) => (
          <Grid item xs={2} sm={4} md={4} key={review.id}>
            <MovieCard
              reviewId={review.id}
              name={review.userByUserReviewerId.name}
              title={review.title}
              description={review.body}
              imgUrl={review.movieByMovieId.imgUrl}
              rating={review.rating}
              movieName={review.movieByMovieId.title}
            />
          </Grid>
        ))}
      </Grid>
    </BaseLayout>
  );
};

export default Home;
