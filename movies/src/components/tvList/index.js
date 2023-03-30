import React from "react";
import TV from "../tvCard";
import Grid from "@mui/material/Grid";

const TVList = ( {shows, action }) => {
  let tvCards = shows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={m.id} tv={m} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TVList;