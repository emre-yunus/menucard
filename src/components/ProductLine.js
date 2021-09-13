export function ProductLine(props) {
    const {product} = props;
    return <div className="productLine">
        <div>{product.name} <span className="productSize">{product.size ? '-'+product.size+'cl' : ''}</span></div>
        <div>{product.price}</div>
    </div>
}