import { Link } from 'react-router-dom';
import Main from '../../widgets/Main';

function ListView() {
  return (
    <Main>
      <h1>Liste des articles</h1>
      <div>
        <nav>
          <button>Refresh</button>
          <Link to="add">Ajouter</Link>
          <button>Supprimer</button>
        </nav>
        <div className="error"></div>
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
              <td className="price">2.66 €</td>
              <td className="qty">345</td>
            </tr>
            <tr>
              <td className="name">Pelle</td>
              <td className="price">12.66 €</td>
              <td className="qty">1345</td>
            </tr>
            <tr>
              <td className="name">Pioche</td>
              <td className="price">32.00 €</td>
              <td className="qty">345</td>
            </tr>
            <tr>
              <td className="name">Marteau</td>
              <td className="price">2.66 €</td>
              <td className="qty">12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Main>
  );
}

export default ListView;
