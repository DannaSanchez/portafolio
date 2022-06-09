import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import error from "./img/404.svg"
import "../index.css"
function Error404 (){
    return(
        <div>
        <Navbar />
        <div className="img1">
        <div className="bodyy">
        <div>
            <h2> Esta pagina no se encuentra</h2>
            <img className="error" src={error}></img>
        </div>
        </div>
        </div> 
        <Footer/>
        </div>
    );
}
export default Error404