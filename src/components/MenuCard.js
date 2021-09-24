import {Row} from "react-bootstrap";
import {Category} from "./Category";

export function MenuCard(props) {
    const { menuData } = props;

    return <>
        <Row className="m-0 mt-4 menu-h1"><h1> Menu</h1></Row>
        <Row className="m-0">
            {menuData.map(c => <Category category={c} key={c.name} />)}
        </Row>
    </>
}