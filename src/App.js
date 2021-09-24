import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Category} from "./components/Category";
import {CATEGORIES_DATA} from "./data/data";
import {Container, Row} from "react-bootstrap";

function App() {
    return (
        <Container fluid className="p-0 p-md-3 p-lg-5">
            <Row className="m-0 mt-4 menu-h1"><h1> Menu</h1></Row>
            <Row className="m-0">
                {CATEGORIES_DATA.map(c => <Category category={c} key={c.name} />)}
            </Row>
        </Container>
    );
}

export default App;
