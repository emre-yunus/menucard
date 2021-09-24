import {Note} from "./Note";
import {Col, Row} from "react-bootstrap";

function ProductSize(props) {
    const {size} = props;
    if (!size) return null;
    return <span className="productSize"> - {size}cl</span>
}

export function ProductLine(props) {
    const {product} = props;
    return <>
        <Row>
            <Col>{product.name}<ProductSize product={product.size}/></Col>
            <Col xs={3} md={4} className="text-end">
                {product.price}&euro;
            </Col>
        </Row>
        <Row>
            <Col><Note note={product.note}/></Col>
        </Row>
    </>;
}