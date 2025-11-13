import { useState } from "react"
import Input from "../Input"

function Registration() {
    const [isReg, setIsReg] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const setReg = () => {
        setIsReg(true)
    }
    const setAuth = () => {
        setIsAuth(true)
    }
    const onChange = (element) => {
        const { name, value } = element.target
        setForm({ ...form, [name]: value })
    }
    const push = (e) => {
        e.preventDefault()
        localStorage.setItem('token', isReg ? createUser() : findUser())
    }
    const createUser = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'PUSH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                'email': form.email,
                'password': form.password
            }
        })
        const json = await res.json()
        console.log(json);
        return (json)

    }
    if (isReg) {
        return (
            <form action="#" onSubmit={push}>
                <Input name={'email'} value={form.email} onChange={onChange} />
                <Input name={'password'} value={form.password} onChange={onChange} />
                <button type="submit">Регистрация</button>
            </form>
        )
    } else if (isAuth) {
        return (
            <form action="#" onSubmit={push}>
                <Input name='email' value={form.email} onChange={onChange} />
                <Input name='password' value={form.password} onChange={onChange} />
                <button type="submit">Авторизация</button>
            </form>
        )
    } else {
        return (
            <div>
                <button onClick={setReg}>Регистрация</button>
                <button onClick={setAuth}>Авторизация</button>
            </div>
        )
    }
}

export default Registration
