import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import useUser from "../../hooks/useUser";

import { UserContainer } from "./styles";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const { name } = useUser();

  return (
    <Container maxWidth="md" sx={{ paddingY: 10 }}>
      <AppBar>
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="secondary"
          >
            News
          </Typography>
          <UserContainer>
            <Typography
              variant="body1"
              component="div"
              color="secondary"
              sx={{ marginRight: 1 }}
            >
              Hello, {name}
            </Typography>
            <Avatar
              sx={{ width: 24, height: 24 }}
              src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
            />
          </UserContainer>
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
}
