
const Card = ({image, title, detail}) => {

    return (
        <div className="container">
            <img src={image} alt="image" />
            <h3>{title}</h3>
            <p>{detail}</p>
        </div>
    )
}

export default Card;