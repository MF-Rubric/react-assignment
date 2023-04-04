import React, { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistsIcon = ({ movie }) => {
  const context = useContext(MovieContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to must watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistsIcon;