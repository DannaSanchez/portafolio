import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {Link} from "react-router-dom"
import { Card, Button } from "react-bootstrap";
import "../pages/css/studies.css"
import { getAllProyects } from "../proyects";
function Proyects (){
    const proyects=getAllProyects();
    return(
        <div>
            <Navbar />
            <div className="img1">
            <div className="bodyy">
            <h2>Proyectos</h2>
                    <div className="line"></div>
                    <div className="cards d-flex p-2 justify-content-center flex-wrap">
                    {proyects.map(proyect=>
                    <Card style={{ width: '18rem' }} key={proyect.id}>
                    <Card.Body >
                        <Card.Title className="text-center">{proyect.nombre}</Card.Title>
                        <Card.Text className="text-center">
                          {proyect.descripcion}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`${proyect.id}`}> <Button variant="primary" className="btn-vm text-center">Ver más</Button></Link>
                    </Card>
                    )}
                </div>
                    
            </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Proyects