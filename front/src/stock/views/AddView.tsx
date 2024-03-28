import Main from '../../widgets/Main';

function AddView() {
  return (
    <Main>
      <h1>Ajouter un article</h1>
      <form>
        <label>
          <span>Nom</span>
          <input type="text" />
          <span className="error"></span>
        </label>
        <label>
          <span>Prix</span>
          <input type="number" />
          <span className="error"></span>
        </label>
        <label>
          <span>Quantité</span>
          <input type="number" />
          <span className="error"></span>
        </label>
        <div className="error"></div>
        <button>Ajouter</button>
      </form>
    </Main>
  );
}

export default AddView;
