import { Link } from 'react-router-dom';
import Main from '../widgets/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NotFoundView() {
  return (
    <Main>
      <h1>Page non trouvée... 😭</h1>
      <Link to="/" className="btn btn-primary">
        <FontAwesomeIcon icon={faHome} />
        <span>Accueil</span>
      </Link>
    </Main>
  );
}
