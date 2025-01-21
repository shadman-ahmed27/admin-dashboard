import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
const Layout = () => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#181C3B" : "#ffffff",
      }}
    >
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
