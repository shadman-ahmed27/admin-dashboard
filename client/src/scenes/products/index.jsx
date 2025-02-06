import React, { useState } from "react";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Products = () => {
  return (
    <Box>
      <Header title="Products" subtitle="See your list of products" />
    </Box>
  );
};

export default Products;
