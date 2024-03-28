import {
  faPlus,
  faRotateRight,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../widgets/Main';
import { Article } from '../interfaces/Article';

const articles: Article[] = [
  { id: 'a1', name: 'Tournevis', price: 2.34, qty: 123 },
  { id: 'a2', name: 'Pelle', price: 3.56, qty: 67 },
];

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
          <button className="btn" onClick={handleRefresh} title="Rafraîchir">
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
          <Link to="add" className="btn" title="Ajouter">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          <button className="btn" title="Supprimer">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
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
            {articles.map((a) => {
              return (
                <tr key={a.id}>
                  <td className="name">{a.name}</td>
                  <td className="price number">{a.price} €</td>
                  <td className="qty number">{a.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Main>
  );
}

export default ListView;
