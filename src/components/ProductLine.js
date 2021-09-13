import {Note} from "./Note";

function ProductSize(props) {
    const {size} = props;
    if (!size) return null;
    return <span className="productSize"> - {size}cl</span>
}

export function ProductLine(props) {
    const {product} = props;
    return <div className="productLine">
        <div>{product.name}
            <ProductSize size={product.size} />
            <Note note={product.note} />
        </div>
        <div>{product.price}</div>
    </div>
}