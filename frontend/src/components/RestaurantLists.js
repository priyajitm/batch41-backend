import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantLists = () => {
    const restaurantData = [
        {
            id: 1,
            name: 'Restaurant 1',
            location: 'fort',
            address: 'some address',
            cuisine: 'chinese',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 2,
            name: 'Restaurant 2',
            location: 'fort',
            address: 'some address',
            cuisine: 'chinese',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 3,
            name: 'Restaurant 3',
            location: 'fort',
            address: 'some address',
            cuisine: 'indian',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 4,
            name: 'Restaurant 4',
            location: 'fort',
            address: 'some address',
            cuisine: 'continental',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 5,
            name: 'Restaurant 5',
            location: 'fort',
            address: 'some address',
            cuisine: 'continental',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 6,
            name: 'Restaurant 6',
            location: 'fort',
            address: 'some address',
            cuisine: 'indian',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 7,
            name: 'Restaurant 7',
            location: 'fort',
            address: 'some address',
            cuisine: 'indian',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 8,
            name: 'Restaurant 8',
            location: 'fort',
            address: 'some address',
            cuisine: 'indian',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 9,
            name: 'Restaurant 9',
            location: 'fort',
            address: 'some address',
            cuisine: 'indian',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id: 10,
            name: 'Restaurant 10',
            location: 'fort',
            address: 'some address',
            cuisine: 'indian',
            cost: '1000',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        
    ]

    const [restaurants, setRestaurants] = useState(restaurantData)

    const filterDataByCuisine = (selectedCuisine) => {
        const filteredData = restaurantData.filter(({cuisine}) => cuisine == selectedCuisine)
        setRestaurants(filteredData)
    }

    return (
        <>
        <h1>RestaurantLists</h1>
        <button style={{margin : '50px'}} onClick={() => filterDataByCuisine('continental')}>Filter By Cuisine</button>
        {restaurants.map(({image, name, location, address, cost, cuisine, id}) => (
            <RestaurantCard key={id} image={image} name={name} location={location} address={address} cost={cost} cuisine={cuisine} />
        ))}
        </>

    )
}

export default RestaurantLists;