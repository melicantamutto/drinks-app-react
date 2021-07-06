import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ recipe: { strDrink, strDrinkThumb, idDrink } }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [modalStyle, setModalStyle] = useState(getModalStyle());
  const { setIdRecipe, setGetRecipe, getRecipe } = useContext(ModalContext);

  const handleModal = () => setOpen(!open);

  const ShowIngredients = (obj) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (obj[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {obj[`strIngredient${i}`]}
            {`: `}
            {obj[`strMeasure${i}`]}
          </li>
        );
      }
    }
  };
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{strDrink}</h2>
        <img src={strDrinkThumb} alt={strDrink} className="card-img-top" />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={() => {
              setIdRecipe(idDrink);
              handleModal();
            }}
          >
            Ver receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              setGetRecipe({});
              handleModal();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{getRecipe.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>{getRecipe.strInstructions}</p>
              <img
                src={getRecipe.strDrinkThumb}
                alt={`Imagen de: ${getRecipe.strDrink}`}
                className="img-fluid my-4"
              />
              <h3>Ingredientes y cantidades</h3>
              <ul>{ShowIngredients(getRecipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
