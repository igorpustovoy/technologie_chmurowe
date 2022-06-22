import './style.scss';
import axios from "axios";
import ProductList from './components/ProductList';

axios.defaults.baseURL = "/api/";

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
