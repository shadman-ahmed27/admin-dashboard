import React, { useState } from "react";
import { FormControl, InputLabel, Box, Select, MenuItem } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");
  return (
    <div>
      <Box m="1.5rem 2.5rem">
        <Header
          title="OVERVIEW"
          subtitle="Overview of general revenue and profit"
        />
      </Box>
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </div>
  );
};

export default Overview;
