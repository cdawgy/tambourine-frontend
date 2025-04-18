import { Route, Routes } from "react-router-dom"
import Dog from "../pages/Dog"
import News from "../pages/News"

const RoutesConfig = () => {
    return(
        <Routes>
            <Route path="/" element={<Dog />}/>
            <Route path="/news" element={<News />}/>
        </Routes>
    )
}

export default RoutesConfig