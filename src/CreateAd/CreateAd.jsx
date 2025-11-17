import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../Input"

const CreateAd = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const ads = JSON.parse(localStorage.getItem('ads')) || []
        const newAd = { ...form, id: Date.now(), date: Date.now() }
        ads.push(newAd)
        localStorage.setItem('ads', JSON.stringify(ads))
        navigate('/ads')
    }
    return (
        <div>
            <h1>Создать объявление</h1>
            <form action="#" onSubmit={handleSubmit}>
                <Input name={'title'} label={'Название'} value={form.title} onChange={onChange}/>
                <Input name={'description'} label={'Описание'} value={form.description} onChange={onChange}/>
                <Input name={'price'} label={'Цена'} value={form.price} onChange={onChange}/>
                <Input name={'srcToImg'} label={'Изображение'} value={form.image} onChange={onChange}/>
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}

export default CreateAd