import { Route, Routes } from "react-router-dom"
import Dog from "../pages/Dog"
import TopHeadlines from "../pages/TopHeadlines"

const RoutesConfig = () => {
    return(
        <Routes>
            <Route path="/" element={<Dog />}/>
            <Route path="/top-headlines" element={<TopHeadlines />}/>
        </Routes>
    )
}

export default RoutesConfig