import { Routes, Route } from 'react-router';
import Counter from './features/counter/Counter';
import Movie from './features/movie/Movie';
import Home from './pages/Home';
import Layout from './components/Layout';
import MovieDetail from './features/movie/MovieDetail';
import Book from './features/book/Book';
import BookDetail from './features/book/BookDetail';
import ProductDetail from './features/product/ProductDetail';
import Product from './features/product/Product';
import Error from './components/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="books" element={<Book />} />
        <Route path="books/:id" element={<BookDetail />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
