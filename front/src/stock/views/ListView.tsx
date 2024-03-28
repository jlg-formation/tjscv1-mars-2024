import { Link } from 'react-router-dom';
import Main from '../../widgets/Main';
import { useState } from 'react';

function ListView() {
  const [errorMsg, setErrorMsg] = useState('');

  const handleRefresh = () => {
    setErrorMsg('coucou');
  };

  return (
    <Main>
      <h1>Liste des articles</h1>
      <div>
        <nav className="flex gap-1">
          <button className="btn" onClick={handleRefresh}>
            Refresh
          </button>
          <Link to="add" className="btn">
            Ajouter
          </Link>
          <button className="btn">Supprimer</button>
        </nav>
        <div className="error h-8 font-bold">{errorMsg}</div>
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price number">2.66 €</td>
              <td className="qty number">345</td>
            </tr>
            <tr>
              <td className="name">Pelle</td>
              <td className="price number">12.66 €</td>
              <td className="qty number">1345</td>
            </tr>
            <tr>
              <td className="name">Pioche</td>
              <td className="price number">32.00 €</td>
              <td className="qty number">345</td>
            </tr>
            <tr>
              <td className="name">Marteau</td>
              <td className="price number">2.66 €</td>
              <td className="qty number">12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Main>
  );
}

export default ListView;
