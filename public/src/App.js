import {BrowserRouter,Routes,Route} from "react-router-dom";
import LandingPage from "./components/main/LandingPage";
import Register from "./components/main/register/Register";
import Login from "./components/main/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderNav } from "./components/main/HeaderNav";
import { ErrorPage } from "./components/main/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      
      <HeaderNav/>

      <Routes>

        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<ErrorPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
