const QuickCard = ({image, title, description}) => {
    return (
        <div className="quick-card">
            <img src={image} alt={title} />
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default QuickCard;