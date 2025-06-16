const Footer = () => {
  return (
    <footer className="w-full bg-amber-950 text-gray-50 py-4 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm lg:text-lg">
        © {new Date().getFullYear()} Boba-Milktea. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
