import { Link } from 'react-router-dom';
import Main from '../widgets/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Title from '../widgets/Title';

export default function NotFoundView() {
  return (
    <Main>
      <Title>Page non trouvée... 😭</Title>
      <Link to="/" className="btn btn-primary">
        <FontAwesomeIcon icon={faHome} />
        <span>Accueil</span>
      </Link>
    </Main>
  );
}
