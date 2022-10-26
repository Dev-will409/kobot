import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import logIn from './pages/logIn/index'
import trading from "./pages/trading";

const App = () => {
    return (
        <Routes>
            <Route path='/login' element={logIn()}/>
            <Route path='/trading' element={trading()}/>
        </Routes>
    );
}

export default App;
