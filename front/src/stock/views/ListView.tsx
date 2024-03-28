import {
  faPlus,
  faRotateRight,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../widgets/Main';
import { useArticleStore } from '../store/articleStore';

function ListView() {
  const [errorMsg, setErrorMsg] = useState('');
  const articleStore = useArticleStore();

  console.log('rendering ListView');

  const handleRefresh = () => {
    setErrorMsg('coucou');
    articleStore.refresh();
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
            {articleStore.articles.map((a) => {
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
