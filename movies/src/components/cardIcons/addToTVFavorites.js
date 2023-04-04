import React, { useContext } from "react";
import { TVContext } from "../../contexts/tvContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTVFavoritesIcon = ({ tv }) => {
  const context = useContext(TVContext);

  const handleAddToTVFavorites = (e) => {
    e.preventDefault();
    context.addToTVFavorites(tv);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTVFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};


export default AddToTVFavoritesIcon;