import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {CATEGORIES_DATA} from "./data/data";
import {Container} from "react-bootstrap";
import {MenuNavbar} from "./components/MenuNavbar";
import {MenuCard} from "./components/MenuCard";

function App() {
    return <Container fluid className="p-0 p-md-3 p-lg-5">
        <MenuNavbar/>
        <MenuCard menuData={CATEGORIES_DATA}/>
    </Container>;

}

export default App;
