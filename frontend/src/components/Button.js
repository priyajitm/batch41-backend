const Button = ({title, isOutline, size, handleClick}) => {
    const outlineClass = isOutline ? 'btn-outline' : ''
    return (
        <button className={`btn ${outlineClass} ${size}`} onClick={handleClick}>
        <span>{title}</span>
        </button>
    );
}

export default Button;