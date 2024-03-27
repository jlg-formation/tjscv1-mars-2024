import { Link } from 'react-router-dom';

function FooterLayout() {
  return (
    <footer className="bg-gray-200 flex items-center justify-center h-12">
      <Link to="/legal" className="hover:underline">
        Mentions Légales
      </Link>
    </footer>
  );
}

export default FooterLayout;
