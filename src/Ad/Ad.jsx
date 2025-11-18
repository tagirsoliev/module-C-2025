import { use, useState } from "react"
import { useLocation } from "react-router-dom"

const Ad = () => {
    const [isHiden, setIsHiden] = useState(true)
    const location = useLocation()
    const ad = location.state.ad
    return (
        // <div></div>
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