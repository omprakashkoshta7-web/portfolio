import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-6 sm:py-8 text-center border-t border-white/5">
      <p className="text-sm sm:text-base text-gray-400 flex items-center justify-center gap-2 px-4">
        Made with <FaHeart className="text-red-500 animate-heartbeat" /> by Sneha Koshta © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
