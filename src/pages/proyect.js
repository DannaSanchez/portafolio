import { useParams } from "react-router-dom";
import { getProyects } from "../proyects";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
function Proyect (){
    const params = useParams();
    const proyect = getProyects(parseInt(params.id));
    return(
        <div>
            <Navbar />
            <div className="img1">
            <div className="bodyy">
                    <h2>Detalles</h2>
                    <div className="line"></div>
                    <div className="details">
                        <h3>Título:</h3> <p>{proyect.nombre}</p>
                        <h3>Descripcion:</h3><p>{proyect.descripcion}</p>
                        <h3>Creado con:</h3><p>{proyect.creado}</p>
                        <h3>Github:</h3>
                        <div className="btn-margin">
                        <a className="proyect-btn btn-1" href={proyect.github} target="_blank">Repositorio</a>
                        <a className="proyect-btn btn-2" href={proyect.sweb} target="_blank">Page</a>
                    </div>
                    </div>
                    <div class="d-grid gap-2 boton" >
                            <Link to="/Proyects" className="link"><Button className="btn-vm mx-auto text-center" variant="primary">Volver</Button></Link>
                    </div>
             </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Proyect;