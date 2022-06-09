import {Link} from "react-router-dom"
import logo from "./Logo.svg"
import "./Navbar.css"
function Navbar (){
    return(
        <div>
        <nav>
            <div className="logo">
                <Link to="/"><img src={logo}/></Link>
                <label for="chk-menu" className="btn-menu"><i className="fa-solid fa-bars"></i></label>
            </div>
                <input type="checkbox" name="barra" id="chk-menu"/>
            <div className="items">
                <Link to="/" className="item hidden">Inicio</Link>
                <Link to="/Studies" className="item">Estudios</Link>
                <Link to="/Proyects" className="item">Proyectos</Link>
            </div>
        </nav>
        <h1>Desarrolladora Front-end</h1>
        </div>
    );
}
export default Navbar