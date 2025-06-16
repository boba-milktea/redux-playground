import { Link } from 'react-router';
import heroImage from '../assets/retro-hero-2.png';

const Home = () => {
  return (
    <div className="flex-wrapper text-center">
      <div
        className=" flex w-full h-48 lg:h-60 bg-cover items-center justify-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className=" bg-yellow-700 w-full md:w-7/12 lg:w-6/12 xl:w-5/12 h-8/12 opacity-95 rounded-md shadow-xl shadow-amber-950"></div>
        <h1 className=" uppercase absolute top-20 lg:top-26 text-border text-shadow-xs text-shadow-amber-100 animate-bounce">
          👾 Redux Playgroud! 🎮🕹️👾
        </h1>
      </div>
      <h2 className="uppercase">Playground introduction</h2>

      <div className="w-full mx-auto md:10/12 lg:w-8/12 font-body text-left text-base/8 lg:text-lg xl:text-xl lg:leading-[1.5] flex flex-col gap-4 border-4 border-border p-4 lg:p-8 shadow-xl shadow-text">
        <h3 className="font-bold">Welcome to Redux Playground! 🎮</h3>
        <p>
          This app is my sandbox for building a modular React architecture with
          a centralized state system powered by Redux.
        </p>
        <p>
          🛠️ Built from the ground up with TypeScript, Tailwind CSS, and React
          Router, this project explores different slices (pun intended) of Redux
          functionality:
        </p>
        <p>
          On the Counter page, I flexed createAsyncThunk to handle async logic
          the classic Redux Toolkit way.
        </p>
        <Link className="link" to="counter">
          Counter
        </Link>
        <p>
          For the Movies, Books, and Products pages, I leveled up with createApi
          from RTK Query. <br /> Ciao! boilerplate. Salut! data fetching magic!
          ⚡
        </p>
        <div className="flex gap-4">
          <Link className="link" to="movies">
            Movies
          </Link>
          <Link className="link" to="books">
            Books
          </Link>
          <Link className="link" to="products">
            Products
          </Link>
        </div>

        <p>
          🚀 What's next? Favorites 💖, user authentication 🔐, and maybe more
          experimental features as I keep exploring.
        </p>
        <p>
          Bottom line: This project is where I had fun pushing Redux to its
          limits. Thanks for stopping by, and as always... Happy coding! 💻✨
        </p>
        <p>
          <span className="font-bold">Coder: </span>
          <span>
            Catherine LIN aka{' '}
            <Link
              className="link"
              target="_blank"
              to="https://github.com/boba-milktea"
            >
              Boba-Milktea
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
