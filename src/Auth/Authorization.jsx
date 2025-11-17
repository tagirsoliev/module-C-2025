import { useState } from "react"
import Input from "../Input"
import { useNavigate } from "react-router-dom"

function Authorization() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const findUser = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find((u) => u.email === form.email && u.password === form.password)
        if (user) {
            alert('Успешная авторизация')
            navigate('/ads')
        } else {
            alert('Неверный email или пароль')
        }
    }

    return (
        <form action="#" onSubmit={findUser}>
            <Input name={'email'} value={form.email} onChange={onChange} />
            <Input name={'password'} value={form.password} onChange={onChange} />
            <button type="submit">Авторизация</button>
        </form>
    )
}

export default Authorization