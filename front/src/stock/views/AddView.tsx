import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormAsyncBtn from '../../widgets/FormAsyncBtn';
import LabelError from '../../widgets/LabelError';
import Main from '../../widgets/Main';
import { useArticleStore } from '../store/articleStore';
import { sleep } from '../../utils';

function AddView() {
  const [name, setName] = useState('Truc');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const articleStore = useArticleStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('e: ', e);
    e.preventDefault();
    setIsSubmitting(true);
    await sleep(2000);
    await articleStore.add({ name, price, qty });
    navigate('..');
    setIsSubmitting(false);
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
        <FormAsyncBtn
          label="Ajouter"
          icon={faPlus}
          isSubmitting={isSubmitting}
        />
      </form>
      {name}
    </Main>
  );
}

export default AddView;
