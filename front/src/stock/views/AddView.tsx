import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LabelError from '../../widgets/LabelError';
import Main from '../../widgets/Main';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddView() {
  return (
    <Main>
      <h1>Ajouter un article</h1>
      <form className="flex w-full max-w-sm flex-col">
        <label className="flex flex-col">
          <span>Nom</span>
          <input
            type="text"
            className="rounded-md border-2 border-gray-300 px-4 py-2"
          />
          <LabelError message={'Champ requis'} />
        </label>
        <label className="flex flex-col">
          <span>Prix</span>
          <input
            type="number"
            className="rounded-md border-2 border-gray-300 px-4 py-2"
          />
          <LabelError message={'Champ requis'} />
        </label>
        <label className="flex flex-col">
          <span>Quantité</span>
          <input
            type="number"
            className="rounded-md border-2 border-gray-300 px-4 py-2 "
          />
          <LabelError message={'Champ requis'} />
        </label>
        <div className="error h-24"></div>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
    </Main>
  );
}

export default AddView;
