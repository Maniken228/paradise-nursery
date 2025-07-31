import './normalize.scss'
import styles from './App.module.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";

function App() {

  return (
    <div className={styles.wrapper}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
