import {ProductSize} from "./ProductSize";

export function ProductLine(props) {
    const {product} = props;
    return <div className="productLine">
        <div>{product.name}
            <ProductSize size={product.size} />
        </div>
        <div>{product.price}</div>
    </div>
}