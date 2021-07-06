import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
       const getCategories = async () =>{
           const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
           const categories = await axios.get(url)
           console.log(categories.data.drinks);
           setCategories(categories.data.drinks)
       }
       getCategories()
    }, []);
    return (
        <CategoriesContext.Provider value={{categories}}>
        {props.children}
        </CategoriesContext.Provider>
    );
};

export default CategoriesProvider;