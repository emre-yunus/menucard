import {Row} from "react-bootstrap";
import {Category} from "./Category";
import {useMenuDataContext} from "../contexts/MenuDataContext";

export function MenuCard() {
    const {menuData} = useMenuDataContext();

    return <>
        <Row className="m-0 mt-4 menu-h1"><h1> Menu</h1></Row>
        <Row className="m-0">
            {menuData.map(c => <Category category={c} key={c.name} />)}
        </Row>
    </>
}