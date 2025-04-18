import { BrowserRouter, Router, Routes } from "react-router-dom"
import SiteNavBar from "./components/navigation/SiteNavBar"
import RoutesConfig from "./routing/RoutesConfig"

const App = () => {
  return (
    <BrowserRouter>
      <SiteNavBar />
      <RoutesConfig />
    </BrowserRouter>
  )
}

export default App
