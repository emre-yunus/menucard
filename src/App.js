import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import {MenuNavbar} from "./components/MenuNavbar";
import {MenuCard} from "./components/MenuCard";
import {getProductsFromDb} from "./services/firestoreProducts";
import {useEffect, useState} from "react";

function App() {
    const [menuFromDb, setMenuFromDb] = useState([]);

    const loadMenu = async function () {
        setMenuFromDb(await getProductsFromDb());
    }

    useEffect(() => loadMenu(), []);

    return <Container fluid className="p-0 p-md-3 p-lg-5">
        <MenuNavbar/>
        <MenuCard menuData={menuFromDb}/>
    </Container>;
}

export default App;
