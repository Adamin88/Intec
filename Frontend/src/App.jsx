
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import Homescreen from "./screens/Homescreen"
import ProductScreen from "./screens/ProductScreen";



const App = () => {
  

  return (
    <Router>
      <Header />
      <main>
        <Routes >
          <Route path="/" element={<Homescreen />} exact/>
          <Route path="/product/:id" element={<ProductScreen />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App