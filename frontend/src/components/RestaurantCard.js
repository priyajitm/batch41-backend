const RestaurantCard = ({image, name, location, address, cuisine, cost}) => {
    return (
        <div className="restaurant-card" style={{width: '350px', height: '350px', display: 'flex'}}>
            <img src={image} alt={name} />
            <p className="restaurant-name">{name}</p>
            <p className="restaurant-location">{location}</p>
            <p className="restaurant-address">{address}</p>
            <p className="cuisine">{cuisine}</p>
            <p className="cost">{cost}</p>
        </div>
    )
}

export default RestaurantCard;