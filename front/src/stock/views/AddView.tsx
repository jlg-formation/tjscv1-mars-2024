import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sleep } from '../../utils';
import FormAsyncBtn from '../../widgets/FormAsyncBtn';
import LabelError from '../../widgets/LabelError';
import Main from '../../widgets/Main';
import { useArticleStore } from '../store/articleStore';
import { validateName, validatePrice, validateQty } from '../validation';

function AddView() {
  const [name, setName] = useState('Truc');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [priceErrorMsg, setPriceErrorMsg] = useState('');
  const [qtyErrorMsg, setQtyErrorMsg] = useState('');

  const [nameTouched, setNameTouched] = useState(false);
  const [priceTouched, setPriceTouched] = useState(false);
  const [qtyTouched, setQtyTouched] = useState(false);

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
            className={
              'rounded-md border-2 border-gray-300 px-4 py-2' +
              (nameTouched && nameErrorMsg ? ' invalid' : '')
            }
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameErrorMsg(validateName(e.target.value));
            }}
            onBlur={() => setNameTouched(true)}
          />
          <LabelError message={nameTouched ? nameErrorMsg : ''} />
        </label>
        <label className="flex flex-col">
          <span>Prix</span>
          <input
            type="number"
            className={
              'rounded-md border-2 border-gray-300 px-4 py-2' +
              (priceTouched && priceErrorMsg ? ' invalid' : '')
            }
            value={price}
            onChange={(e) => {
              setPrice(+e.target.value);
              setPriceErrorMsg(validatePrice(+e.target.value));
            }}
            onBlur={() => setPriceTouched(true)}
          />
          <LabelError message={priceTouched ? priceErrorMsg : ''} />
        </label>
        <label className="flex flex-col">
          <span>Quantité</span>
          <input
            type="number"
            className={
              'rounded-md border-2 border-gray-300 px-4 py-2' +
              (qtyTouched && qtyErrorMsg ? ' invalid' : '')
            }
            value={qty}
            onChange={(e) => {
              setQty(+e.target.value);
              setQtyErrorMsg(validateQty(+e.target.value));
            }}
            onBlur={() => setQtyTouched(true)}
          />
          <LabelError message={qtyTouched ? qtyErrorMsg : ''} />
        </label>
        <div className="error flex h-24 items-center justify-center font-bold">
          {errorMsg}
        </div>
        <FormAsyncBtn
          label="Ajouter"
          icon={faPlus}
          isSubmitting={isSubmitting}
          disabled={(nameErrorMsg + priceErrorMsg + qtyErrorMsg).length > 0}
        />
      </form>
    </Main>
  );
}

export default AddView;
