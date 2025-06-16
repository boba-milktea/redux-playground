import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="mt-4 m-2 lg:m-4 p-4 grow-1 lg:p-8 border-4 border-text">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
