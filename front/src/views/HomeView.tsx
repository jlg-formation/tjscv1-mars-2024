import { Link } from 'react-router-dom';

function HomeView() {
  return (
    <main className="flex grow flex-col items-center gap-2">
      <h1 className="text-4xl font-bold">Gérer efficacement votre stock !</h1>
      <Link to="/stock" className="btn btn-primary">
        Voir le stock
      </Link>
      <button disabled className="btn btn-primary">
        Voir le stock
      </button>
      <button className="btn">Voir le stock</button>
      <button disabled className="btn">
        Voir le stock
      </button>
    </main>
  );
}

export default HomeView;
