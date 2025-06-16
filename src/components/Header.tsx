import { Link } from 'react-router';
import BtnLink from './BtnLink';

const Header = () => {
  return (
    <header className="sticky z-100 top-0 w-full flex items-center justify-between p-4 lg:px-8 border-b-4 bg-old-paper border-text">
      <Link to="/">
        <img
          className="w-8 lg:w-10"
          src="/logo-2.png"
          alt="a pixel redux logo"
        />
      </Link>
      <nav className="flex gap-4">
        <BtnLink type="nav-link" to="/counter">
          Counter
        </BtnLink>
        <BtnLink type="nav-link" to="/movies">
          Movies
        </BtnLink>
        <BtnLink type="nav-link" to="/books">
          Books
        </BtnLink>
        <BtnLink type="nav-link" to="/products">
          Products
        </BtnLink>
      </nav>
    </header>
  );
};

export default Header;
