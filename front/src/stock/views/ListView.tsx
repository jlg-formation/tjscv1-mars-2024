import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../widgets/Main';
import { useArticleStore } from '../store/articleStore';

function ListView() {
  console.log('rendering ListView');
  const [errorMsg, setErrorMsg] = useState('');
  const articleStore = useArticleStore();
  const [selectedArticles, setSelectedArticles] = useState(new Set<string>());

  useEffect(() => {
    (async () => {
      console.log('start use effect');
      if (articleStore.articles === undefined) {
        await articleStore.refresh();
      }
    })();
    return () => {
      console.log('retour de useEffect');
    };
  }, [articleStore]);

  const handleRefresh = async () => {
    setErrorMsg('coucou');
    await articleStore.refresh();
    console.log('refreshed finished');
  };

  const handleSelect = (id: string) => () => {
    if (selectedArticles.has(id)) {
      selectedArticles.delete(id);
      setSelectedArticles(new Set(selectedArticles));
      return;
    }
    selectedArticles.add(id);
    setSelectedArticles(new Set(selectedArticles));
  };

  const handleRemove = async () => {
    const ids = [...selectedArticles];
    await articleStore.remove(ids);
    setSelectedArticles(new Set());
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
          <button
            className="btn"
            title="Supprimer"
            hidden={selectedArticles.size === 0}
            onClick={handleRemove}
          >
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
            {articleStore.articles === undefined ? (
              <tr>
                <td colSpan={3}>
                  <div className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faCircleNotch} spin={true} />
                    <span>Chargement...</span>
                  </div>
                </td>
              </tr>
            ) : (
              articleStore.articles.map((a) => {
                return (
                  <tr
                    key={a.id}
                    onClick={handleSelect(a.id)}
                    className={selectedArticles.has(a.id) ? 'selected' : ''}
                  >
                    <td className="name">{a.name}</td>
                    <td className="price number">{a.price} €</td>
                    <td className="qty number">{a.qty}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </Main>
  );
}

export default ListView;
