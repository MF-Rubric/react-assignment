import React, { useState } from "react";

export const MediaContext = React.createContext(null);

const MediaContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustwatch, setMyWatchlist] = useState( [] ) 
console.log(mustwatch)
  const addToFavorites = (movie,tv) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie,tv) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id,tv.id
    ) )
  };
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
    const addToMustWatch= (movie) => {
    let newWatchlist = [];
    if (!mustwatch.includes(movie.id)){
      newWatchlist = [...mustwatch, movie.id];
    }
    else{
      newWatchlist = [...mustwatch];
    }
    setMyWatchlist(newWatchlist)
  };

  // We will use this function in a later section
  const removeFromMustWatch = (movie) => {
    setMyWatchlist( mustwatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MediaContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        mustwatch,
        addToMustWatch,
        removeFromMustWatch
      }}
    >
      {props.children}
    </MediaContext.Provider>
  );

};

export default MediaContextProvider;
