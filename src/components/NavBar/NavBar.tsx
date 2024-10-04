import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

export const NavBar: FC = () => (
  <AppBar position="static" color="primary" sx={{ mb: 3 }}>
    <Toolbar>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        MathLogica
      </Typography>

      <Box>{/* Add any other nav items like buttons or links here */}</Box>
    </Toolbar>
  </AppBar>
);
