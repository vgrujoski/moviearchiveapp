import { Route, Routes } from "react-router-dom";

import Layout from './components/layouts/Layout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Movies from './pages/movies/Movies';
import Movie from "./pages/movie/Movie";
import MovieCast from "./pages/movieCast/MovieCast";
import Actor from "./pages/actor/Actor";
import Genre from "./pages/genres/Genre";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie/:movieSlug" element={<Movie />} />
              <Route path="/movie/:movieSlug/cast" element={<MovieCast />} />
              <Route path="/actor/:actorSlug" element={<Actor />} />
              <Route path="/genre/:genreSlug" element={<Genre />} />
          </Routes>
      </Layout>
  );
}

export default App;
