import {getAllStudies} from "../studies"
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {Card, Button, Row} from "react-bootstrap"

import "../pages/css/studies.css"
import "../index.css"
import {Link} from "react-router-dom"
//pages
function Studies(){
    const studies=getAllStudies();
    return(
        <div>
            <Navbar />
            <div className="img1">
            <div className="bodyy">
                <h2>Estudios</h2>
                    <div className="line"></div>
                    <div className="cards d-flex p-2 justify-content-center flex-wrap">
                    {studies.map(study=>
                    <Card className="m-2 card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={study.foto} style={{ width: '12rem' }}/>
                        <Card.Body>
                            <Card.Title  className="text-center">{study.titulo}</Card.Title>
                            <Card.Text className="text-center"> {study.institucion} </Card.Text>
                        </Card.Body> 
                        <div class="d-grid gap-2 boton" >
                            <Link to={`${study.id}`} className="link"><Button className="btn-vm mx-auto text-center" variant="primary">Ver más</Button></Link>
                        </div>
                    </Card>
                    )}
                    </div>
            </div>
            </div>
            
            <Footer/>
        </div>
    );
}
export default Studies