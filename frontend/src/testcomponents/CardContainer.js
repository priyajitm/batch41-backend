import { useEffect, useState } from "react"
import Card from './Card'

const CardContainer = () => {
    const [cardData, setCardData] = useState(null)

    const data = [
        {
            id: 1,
            title : 'this is my first card' ,
            detail :'I am very excited to learn react functional component',
            image : 'https://res.cloudinary.com/practicaldev/image/fetch/s--pHrmQNaA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/q0vxo5pcm6qjo14k0ami.png'
        },
        {
            id: 2,
            title : 'this is my second card' ,
            detail :'I am very excited to learn react functional component',
            image : 'https://res.cloudinary.com/practicaldev/image/fetch/s--pHrmQNaA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/q0vxo5pcm6qjo14k0ami.png'
        },
        {
            id: 3,
            title : 'this is my third card' ,
            detail :'I am very excited to learn react functional component',
            image : 'https://res.cloudinary.com/practicaldev/image/fetch/s--pHrmQNaA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/q0vxo5pcm6qjo14k0ami.png'
        },
        {
            id: 4,
            title : 'this is my fourth card' ,
            detail :'I am very excited to learn react functional component',
            image : 'https://res.cloudinary.com/practicaldev/image/fetch/s--pHrmQNaA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/q0vxo5pcm6qjo14k0ami.png'
        }
    ]

    useEffect(() => {
        // calling the api and getting the data
        setCardData(data)
    }, [])

    return (
        
            cardData && cardData.map(card => {
                return <Card key={card.id} title={card.title} detail={card.detail} image={card.image}/>
            })
    )
}

export default CardContainer