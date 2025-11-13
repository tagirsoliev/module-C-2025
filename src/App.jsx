import { Routes, Route, BrowserRouter } from "react-router-dom"
import Registration from "./Registration/Registration"
import Home from "./Home/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
