import { useParams } from "react-router-dom";
import {getStudy} from "../studies"
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
function Study (){
    const params = useParams();
    const study = getStudy(parseInt(params.id));
    return(
        <div>
            <Navbar />
            <div className="img1">
            <div className="bodyy">
                    <h2>Detalles</h2>
                    <div className="line"></div>
                    <div className="details">
                        <h3>Título:</h3> <p>{study.titulo}</p>
                        <h3>Institución:</h3><p>{study.institucion}</p>
                        <h3>Fecha:</h3><p>{study.fecha}</p>
                        <h3>Descripcion:</h3><p>{study.descripcion}</p>
                    </div>
                    <div class="d-grid gap-2 boton" >
                            <Link to="/Studies" className="link"><Button className="btn-vm mx-auto text-center" variant="primary">Volver</Button></Link>
                    </div>
             </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Study;