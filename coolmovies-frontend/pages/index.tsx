import { css } from "@emotion/react";
import { Container, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import useUser from "../hooks/useUser";

import { Link as NextLink } from "next/link";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const user = useUser();

  console.log(user);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{ display: "flex" }}
        variant="h3"
        component="h1"
        color="grey.800"
      >
        Hello
        <Typography
          sx={{ marginX: 2 }}
          display="flex"
          variant="h3"
          component="h1"
          fontWeight="bold"
          color="primary"
        >
          {user.name}!
        </Typography>
      </Typography>

      <div>
        <Typography variant="h3" component="h1" color="grey.800">
          Check out the latest
        </Typography>

        <Link
          href="/reviews"
          color="primary"
          component={NextLink}
          variant="h3"
          fontWeight="bold"
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          Movie Reviews
        </Link>
      </div>
    </Container>
  );
};

export default Home;
