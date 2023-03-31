
import React from "react";
import { getShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TVShowPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvshow', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (tvId) => true 

  return (
    <PageTemplate
      title="Discover Shows"
      shows={shows}
      action={(tv) => {
        return <AddToFavoritesIcon tv={tv} />
      }}
    />
);

};
export default TVShowPage;
