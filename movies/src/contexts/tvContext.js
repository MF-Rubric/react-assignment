import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
  const [tvfavorites, setTVFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  

  const addToTVFavorites = (tv) => {
    let newFavorites = [];
    if (!tvfavorites.includes(tv.id)){
      newFavorites = [...tvfavorites, tv.id];
    }
    else{
      newFavorites = [...tvfavorites];
    }
    setTVFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromTVFavorites = (tv) => {
    setTVFavorites( tvfavorites.filter(
      (mId) => mId !== tv.id
    ) )
  };

  const addReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };
  

  return (
    <TVContext.Provider
      value={{
        tvfavorites,
        addToTVFavorites,
        removeFromTVFavorites,
        addReview,
      }}
    >
      {props.children}
    </TVContext.Provider>
  );

};

export default TVContextProvider;
