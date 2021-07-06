import { useState, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const { categories } = useContext(CategoriesContext);
  const { setSearchRecipes, setConsult } = useContext(RecipesContext);
  const [search, setSearch] = useState({
    nameRecipe: "",
    category: "",
  });

  const getDataRecipes = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setSearchRecipes(search);
    setConsult(true);
  };

  return (
    <form className="col-12" onSubmit={(e) => handlerSubmit(e)}>
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="nameRecipe"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={getDataRecipes}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            className="form-control"
            onChange={getDataRecipes}
          >
            <option value="null">Selecciona Categoría</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Recetas"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
