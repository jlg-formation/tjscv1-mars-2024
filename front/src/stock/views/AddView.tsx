import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sleep } from '../../utils';
import FormAsyncBtn from '../../widgets/FormAsyncBtn';
import LabelError from '../../widgets/LabelError';
import Main from '../../widgets/Main';
import { useArticleStore } from '../store/articleStore';
import { validateName } from '../validation';

function AddView() {
  const [name, setName] = useState('Truc');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [errorNameMsg, setErrorNameMsg] = useState('');

  const navigate = useNavigate();

  const articleStore = useArticleStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('e: ', e);
    e.preventDefault();
    try {
      setErrorMsg('');
      setIsSubmitting(true);
      await sleep(2000);
      await articleStore.add({ name, price, qty });
      navigate('..');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Erreur Technique';
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
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
            onChange={(e) => {
              setName(e.target.value);
              setErrorNameMsg(validateName(e.target.value));
            }}
          />
          <LabelError message={errorNameMsg} />
        </label>
        <label className="flex flex-col">
          <span>Prix</span>
          <input
            type="number"
            className="rounded-md border-2 border-gray-300 px-4 py-2"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
          <LabelError message={''} />
        </label>
        <label className="flex flex-col">
          <span>Quantité</span>
          <input
            type="number"
            className="rounded-md border-2 border-gray-300 px-4 py-2 "
            value={qty}
            onChange={(e) => setQty(+e.target.value)}
          />
          <LabelError message={''} />
        </label>
        <div className="error flex h-24 items-center justify-center font-bold">
          {errorMsg}
        </div>
        <FormAsyncBtn
          label="Ajouter"
          icon={faPlus}
          isSubmitting={isSubmitting}
          disabled={errorNameMsg.length > 0}
        />
      </form>
      {name}
    </Main>
  );
}

export default AddView;
