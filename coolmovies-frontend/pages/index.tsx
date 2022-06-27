import { Container, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import useUser from "../hooks/useUser";

const Home: NextPage = () => {
  const user = useUser();

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
          component="span"
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
