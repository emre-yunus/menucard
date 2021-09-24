import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Category} from "./components/Category";
import {CATEGORIES_DATA} from "./data/data";

function App() {
    return (
        <div>
            <h1>Menu</h1>
            {CATEGORIES_DATA.map(c => <Category category={c} key={c.name} />)}
        </div>
    );
}

export default App;
