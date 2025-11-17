import { Link } from "react-router-dom"
function Home() {

    return (
        <div>
            <Link to="/registration">Регистрация</Link >
            <Link to="/auth">Авторизация</Link >
        </div>
    )
}

export default Home
