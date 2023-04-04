import React, { useContext } from "react";
import PageTemplate from "../components/templateTVListPage";
import {TVContext} from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getTV } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromTVFavorites from "../components/cardIcons/removeFromTVFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteShowsPage = () => {
  const {tvfavorites: tvIds } = useContext(TVContext);

  // Create an array of queries and run in parallel.
  const favoriteTVQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTV,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteTVQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favoriteTVQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Media"
      shows={shows}
      action={(tv) => {
        return (
          <>
            <RemoveFromTVFavorites tv={tv} />
          </>
        );
      }}
      
    />
  );
 
};

export default FavoriteShowsPage;