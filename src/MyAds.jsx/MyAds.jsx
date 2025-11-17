import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const MyAds = () => {
    const navigate = useNavigate()
    const [ads, setAds] = useState([])
    useEffect(() => {
        const adstemp = JSON.parse(localStorage.getItem('myAds')) || []
        setAds(adstemp)
    }, [])
    const changeAd = (id) => {
        navigate(`/changead/${id}`)
    }
    const deleteAd = (id) => {
        const filteredAds = ads.filter((ad) => ad.id !== id)
        setAds(filteredAds)
        localStorage.setItem('myAds', JSON.stringify(filteredAds))
    }
    return (

        <div>
            <h1>Объявления</h1>
            <select name="sorting" id="sorting" defaultValue="date" onChange={(e) => {
                if (e.target.value === "price_asc") {
                    const sortedAds = [...ads].sort((a, b) => a.price - b.price)
                    setAds(sortedAds)
                } else if (e.target.value === "price_desc") {
                    const sortedAds = [...ads].sort((a, b) => b.price - a.price)
                    setAds(sortedAds)
                } else {
                    const sortedAds = [...ads].sort((a, b) => a.date - b.date)
                    setAds(sortedAds)
                }
            }}>
                <option value="date">По дате</option>
                <option value="price_asc">По цене ▲</option>
                <option value="price_desc">По цене ▼</option>
            </select>
            {ads.map((ad) => (
                <div key={ad.id}>
                    <h2>{ad.title}</h2>
                    <p>{ad.description}</p>
                    <p>Цена: {ad.price}</p>
                    <img src={ad.image} alt={ad.title} />
                    <button onClick={() => deleteAd(ad.id)}>Удалить</button>
                    <button onClick={() => changeAd(ad.id)}>Редактировать</button>
                </div>
            ))}
        </div>
    )
}
export default MyAds