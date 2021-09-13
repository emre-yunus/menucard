export function Note(props) {
    const {note} = props;
    if (!note) return null;
    return <div className="note">{note}</div>
}
