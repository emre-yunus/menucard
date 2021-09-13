function ProductSize(props) {
    const {size} = props;
    if (!size) return null;
    return <span className="productSize"> - {size}cl</span>
}

function ProductNote(props) {
    const {note} = props;
    if (!note) return null;
    return <div className="note">{note}</div>
}

export function ProductLine(props) {
    const {product} = props;
    return <div className="productLine">
        <div>{product.name}
            <ProductSize size={product.size} />
            <ProductNote note={product.note} />
        </div>
        <div>{product.price}</div>
    </div>
}