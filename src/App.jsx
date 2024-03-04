import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//we use outlet when we want to change only that part like here navbar and footer is fixed 
import { Outlet } from "react-router-dom"


function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      
    </>
  )
}

export default App
