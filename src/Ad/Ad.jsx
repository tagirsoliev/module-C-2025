import { useState } from "react"

const Ad = ({ ad }) => {
    const [isHiden, setIsHiden] = useState(true)
    return (
        <div key={ad.id}>
            <h2>{ad.title}</h2>
            <p>{ad.description}</p>
            <p>Цена: {ad.price}</p>
            <img src={ad.image} alt={ad.title} />
            <div>
                <button onClick={() => setIsHiden(!isHiden)}>Посмотреть контакты</button>
                <p hidden={isHiden}> Сюда нужно что-то писать?</p>
            </div>
        </div>
    )
}

export default Ad