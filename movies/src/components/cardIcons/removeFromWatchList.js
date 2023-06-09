import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {MovieContext } from "../../contexts/movieContext";

const RemoveFromPlaylistIcon = ({ movie }) => {
  const context = useContext(MovieContext);

  const handleRemoveFromMustWatch = (e) => {
    e.preventDefault();
    context.removeFromMustWatch(movie);
  };
  return (
    <IconButton
      aria-label="remove from must watch"
      onClick={handleRemoveFromMustWatch}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromPlaylistIcon;
