import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormAsyncBtn from '../../widgets/FormAsyncBtn';
import LabelError from '../../widgets/LabelError';
import Main from '../../widgets/Main';
import { useArticleStore } from '../store/articleStore';

function AddView() {
  const [name, setName] = useState('Truc');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  const navigate = useNavigate();

  const articleStore = useArticleStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('e: ', e);
    e.preventDefault();
    await articleStore.add({ name, price, qty });
    navigate('..');
  };

  return (
    <Main>
      <h1>Ajouter un article</h1>
      <form className="flex w-full max-w-sm flex-col" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span>Nom</span>
          <input
            type="text"
            className="rounded-md border-2 border-gray-300 px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LabelError message={'Champ requis'} />
        </label>
        <label className="flex flex-col">
          <span>Prix</span>
          <input
            type="number"
            className="rounded-md border-2 border-gray-300 px-4 py-2"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
          <LabelError message={'Champ requis'} />
        </label>
        <label className="flex flex-col">
          <span>Quantité</span>
          <input
            type="number"
            className="rounded-md border-2 border-gray-300 px-4 py-2 "
            value={qty}
            onChange={(e) => setQty(+e.target.value)}
          />
          <LabelError message={'Champ requis'} />
        </label>
        <div className="error h-24"></div>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
        <FormAsyncBtn />
      </form>
      {name}
    </Main>
  );
}

export default AddView;
