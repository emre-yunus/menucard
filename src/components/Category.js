import {ProductLine} from "./ProductLine";
import {Note} from "./Note";
import {Card, Col, Collapse} from "react-bootstrap";
import {useState} from "react";

export function Category(props) {
    const {category} = props;
    const [ isOpen, setIsOpen ] = useState(true);

    return <Col xs={12} md={6} lg={4} className="p-0 p-md-1">
        <Card className="mt-2 h-100">
            <Card.Header className="bg-dark text-white" onClick={() => setIsOpen(!isOpen)}>
                <h2>{category.name}</h2>
            </Card.Header>
            <Collapse in={isOpen}>
                <Card.Body>
                    <Note note={category.note} />
                    {category.products.map(p => <ProductLine product={p} key={p.name} />)}
                </Card.Body>
            </Collapse>
            </Card>
    </Col>
}