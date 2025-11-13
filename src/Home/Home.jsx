import { Link } from "react-router-dom"
import Registration from "../Registration/Registration"
function Home() {

    return (
        <div>
            <Link to={Registration}>Регистрация</Link >
        </div>
    )
}

export default Home
