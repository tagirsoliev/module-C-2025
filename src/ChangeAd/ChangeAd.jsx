import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Input from "../Input"

const ChangeAd = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    })

    useEffect(() => {
        const ads = JSON.parse(localStorage.getItem('ads')) || []
        const ad = ads.find((a) => String(a.id) === String(id))
        if (ad) {
            setForm({ title: ad.title, description: ad.description, price: ad.price, image: ad.image })
        }
    }, [id])

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const ads = JSON.parse(localStorage.getItem('ads')) || []
        const index = ads.findIndex((a) => String(a.id) === String(id))
        if (index !== -1) {
            ads[index] = { ...ads[index], ...form, date: Date.now() }
            localStorage.setItem('ads', JSON.stringify(ads))
        }
        navigate('/ads')
    }

    return (
        <div>
            <h1>Редактирование объявления</h1>
            <form action="#" onSubmit={handleSubmit}>
                <Input name={'title'} label={'Название'} value={form.title} onChange={onChange}/>
                <Input name={'description'} label={'Описание'} value={form.description} onChange={onChange}/>
                <Input name={'price'} label={'Цена'} value={form.price} onChange={onChange}/>
                <Input name={'image'} label={'Изображение'} value={form.image} onChange={onChange}/>
                <button type="submit">Редактировать</button>
            </form>
        </div>
    )
}

export default ChangeAd