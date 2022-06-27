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
import useUser from "../hooks/useUser";
import { UserActions } from "../store/slices/user";

const primary = "#1976d2";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const user = useUser();

  console.log(user);

  return (
    <Container maxWidth="sm">
      <button onClick={() => dispatch(UserActions.getUser())}></button>
    </Container>
  );
};

export default Home;
