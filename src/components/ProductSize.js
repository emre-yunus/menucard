export function ProductSize(props) {
    const {size} = props;
    if (!size) return null;
    return <span className="productSize"> - {size}cl</span>
}