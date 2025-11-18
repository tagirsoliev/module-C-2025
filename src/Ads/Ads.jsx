import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Ads = () => {
    const [ads, setAds] = useState([])
    useEffect(() => {
        const adstemp = JSON.parse(localStorage.getItem('ads')) || []
        adstemp.sort((a, b) => b.date - a.date)
        setAds(adstemp)
    }, [])

    return (
        <div>
            <Link to="/createad">Создать объявление</Link>
            <Link to="/myads">Мои объявления</Link>
            <h1>Объявления</h1>

            <label htmlFor="sorting">Сортировка: </label>
            <select name="sorting" id="sorting" defaultValue="date" onChange={(e) => {
                if (e.target.value === "price_asc") {
                    const sortedAds = [...ads].sort((a, b) => Number(a.price) - Number(b.price))
                    setAds(sortedAds)
                } else if (e.target.value === "price_desc") {
                    const sortedAds = [...ads].sort((a, b) => Number(b.price) - Number(a.price))
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

            <div className="ads-list">
                {ads.length === 0 && <p>Объявлений нет</p>}
                {ads.map((ad) => (
                    <div key={ad.id} className="ad-item">
                        <h2>{ad.title}</h2>
                        <p>{ad.description}</p>
                        <p>Цена: {ad.price}</p>
                        {ad.image && <img src={ad.image} alt={ad.title} />}
                        <Link to={`/ads/${ad.id}`} state={{ ad }}>Подробнее</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ads