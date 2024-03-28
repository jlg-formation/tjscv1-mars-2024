import { Link } from 'react-router-dom';

function HomeView() {
  return (
    <main className="flex grow flex-col items-center gap-2">
      <h1 className="text-4xl">Gérer efficacement votre stock !</h1>
      <Link to="/stock" className="btn btn-primary">
        Voir le stock
      </Link>
    </main>
  );
}

export default HomeView;
