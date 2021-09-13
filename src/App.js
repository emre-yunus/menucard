import './App.css';
import {ProductLine} from "./components/ProductLine";
import {Category} from "./components/Category";
import {PRODUCTS_DATA, CATEGORIES_DATA} from "./data/data";

function App() {
    return (
        <div>
            <h1>Menu</h1>
            {CATEGORIES_DATA.map(c => <Category category={c} key={c.name} />)}
            <h1>Menu</h1>
            {PRODUCTS_DATA.map(p => <ProductLine product={p} key={p.name} />)}
        </div>
    );
}

export default App;
