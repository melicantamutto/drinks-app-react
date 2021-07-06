import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idRecipe, setIdRecipe] = useState(null);
  const [getRecipe, setGetRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!idRecipe) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const recipes = await axios.get(url);
      console.log(recipes.data.drinks[0]);
      setGetRecipe(recipes.data.drinks[0]);
    };
    fetchRecipe();
  }, [idRecipe]);
  return (
    <ModalContext.Provider value={{ setIdRecipe, getRecipe, setGetRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
