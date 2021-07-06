import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [searchRecipes, setSearchRecipes] = useState({
    nameRecipe: "",
    category: "",
  });
  const [recipes, setRecipes] = useState([]);
  const [consult, setConsult] = useState(false);
  const { nameRecipe, category } = searchRecipes;

  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nameRecipe}&c=${category}`;
        const resultRecipes = await axios.get(url);
        console.log(resultRecipes.data.drinks);
        setRecipes(resultRecipes.data.drinks);
      };
      getRecipes();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consult]);
  return (
    <RecipesContext.Provider value={{ setSearchRecipes, recipes, setConsult }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
