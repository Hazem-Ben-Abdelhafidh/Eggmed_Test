import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>

      </Route>
    </Routes>
  )
}

export default App
