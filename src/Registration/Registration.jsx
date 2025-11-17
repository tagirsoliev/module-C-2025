import { useState } from "react"
import Input from "../Input"
import { useNavigate } from "react-router-dom"

function Registration() {
    const Navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: '',
        token: ''
    })
    const onChange = (element) => {
        const { name, value } = element.target
        setForm({ ...form, [name]: value })
    }
    const createUser = (e) => {
        e.preventDefault()
        form.token = Math.random().toString(36).substring(2)
        const users = JSON.parse(localStorage.getItem('users')) || []
        users.push(form)
        localStorage.setItem('users', JSON.stringify(users))    
        Navigate('/auth')
    }


    // const createUser = async () => {
    //     const res = await fetch('http://127.0.0.1:8000/api/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: {
    //             'email': form.email,
    //             'password': form.password
    //         }
    //     })
    //     const json = await res.json()
    //     console.log(json);
    //     return (json)
    // }




    return (
        <form action="#" onSubmit={createUser}>
            <Input name={'email'} value={form.email} onChange={onChange} />
            <Input name={'password'} value={form.password} onChange={onChange} />
            <button type="submit">Регистрация</button>
        </form>
    )
}
export default Registration