import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
        <RecipesList />
      </div>
    </div>
  );
}

export default App;
