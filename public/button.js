function Button({color, id, padding, margin, onSubmit, text}){
    return(<>
        <button id={id} className={`btn btn-${color}`} style={{padding: `${padding}`, margin: `${margin}`}} type="submit" onClick={onSubmit}>{text}</button>
    </>);
}