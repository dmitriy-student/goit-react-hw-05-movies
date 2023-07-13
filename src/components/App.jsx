import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';
import Container from './Container/Container';

const NavLinkStyled = styled(NavLink)`
  color: black;
  display: block;
  padding: 8px 12px;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  border: solid 1px;
  border-radius: 8px;
  width: 100px;
  &.active {
    color: orange;
`;

export const App = () => {
  return (
    <Container>
      <header>
        <nav>
          <ul>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Container>
  );
};
