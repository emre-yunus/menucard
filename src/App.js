import './App.css';
import {ProductLine} from "./components/ProductLine";

function App() {
    return (
        <div>
            <h1>Menu</h1>
            <ProductLine productName="cola" price="1" />
            <ProductLine productName="water" price="1" />
            <ProductLine productName="bier" price="1" />
            <ProductLine productName="wijn" price="2" />
        </div>
    );
}

export default App;
