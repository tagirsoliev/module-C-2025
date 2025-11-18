import { Routes, Route, BrowserRouter } from "react-router-dom"
import Registration from "./Registration/Registration"
import Home from "./Home/Home"
import Authorization from "./Auth/Authorization"
import Ads from "./Ads/Ads"
import ChangeAd from "./ChangeAd/ChangeAd"
import CreateAd from "./CreateAd/CreateAd"
import Ad from "./Ad/Ad"
import MyAds from "./MyAds/MyAds"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/myads" element={<MyAds />} />
        <Route path="/changead/:id" element={<ChangeAd />} />
        <Route path="/createad" element={<CreateAd />} />
        <Route path="/ads/:id" element={<Ad />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
