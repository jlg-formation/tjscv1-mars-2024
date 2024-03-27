import { Link } from 'react-router-dom';

function HeaderLayout() {
  return (
    <header className="bg-gray-200 flex items-center h-12 px-2">
      <Link to="/" className="flex items-center gap-2 hover:underline">
        <img src="/logo.svg" alt="Logo" className="h-10" />
        <span className="font-bold text-2xl">Gestion Stock</span>
      </Link>
    </header>
  );
}

export default HeaderLayout;
