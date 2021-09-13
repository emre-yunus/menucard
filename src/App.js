import './App.css';
import {ProductLine} from "./components/ProductLine";

function App() {
    return (
        <div>
            <h1>Menu</h1>
            <ProductLine productName="cola" />
            <ProductLine productName="water" />
            <ProductLine productName="bier" />
            <ProductLine productName="wijn" />
        </div>
    );
}

export default App;
