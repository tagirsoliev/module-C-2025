import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../Input"

const CreateAd = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: '',
        description: '',
        price: '',
        img: ''
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
    const socketRef = useRef(null);
    useEffect(() => {
        socketRef.current = new WebSocket("ws://localhost:8080");

        socketRef.current.onopen = () => {
            console.log("WebSocket connection established");
        }
        socketRef.current.onmessage = (event) => {
            alert(`New ad created: ${event.data}`);
        }
        socketRef.current.onclose = () => {
            console.log("WebSocket connection closed");
        }
        socketRef.current.onerror = (error) => {
            console.error("WebSocket error:", error);
        }
        return () => {
            socketRef.current.close();
        }
    }, []);
    return (
        <div>
            <h1>Создать объявление</h1>
            <form action="#" onSubmit={handleSubmit}>
                <Input name={'title'} label={'Название'} value={form.title} onChange={onChange} />
                <Input name={'description'} label={'Описание'} value={form.description} onChange={onChange} />
                <Input name={'price'} label={'Цена'} value={form.price} onChange={onChange} />
                <Input name={'img'} label={'Изображение'} value={form.image} onChange={onChange} />
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}

export default CreateAd