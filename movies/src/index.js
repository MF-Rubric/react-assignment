
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MovieContextProvider from "./contexts/movieContext";
import TVContextProvider from "./contexts/tvContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MustWatchMoviesPage from "./pages/mustwatchMoviesPage";
import TVShowPage from "./pages/TVShowPage";
import TVPage from "./pages/tvDetailsPage";
import FavoriteShowsPage from "./pages/favoriteShowsPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MovieContextProvider>
        <TVContextProvider>
    <Routes>
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="movies/mustwatch" element={<MustWatchMoviesPage/>}/>
          <Route path="/shows/tvfavorites" element={<FavoriteShowsPage/>}/>
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/shows/tv" element={ <TVShowPage /> } />
          <Route path="/tv/:id" element={<TVPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
    </TVContextProvider>
  </MovieContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
