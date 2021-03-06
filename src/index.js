import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import CategoriesProvider from "./context/CategoriesContext";
import RecipesProvider from "./context/RecipesContext";
import ModalProvider from "./context/ModalContext";

ReactDOM.render(
  <React.StrictMode>
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
