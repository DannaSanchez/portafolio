import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import imgme from "./img/img-me.svg"
import "../pages/css/home.css"
import "../index.css"
import Illustrator from "../pages/img/illustrator.svg"
import Adobe from "../pages/img/AdobeXD.svg"
import figma from "../pages/img/figma.png"
import group from "../pages/img/html.css.svg"
import React from "../pages/img/react.svg"
import office from "../pages/img/office.png"
import dfd from "../pages/img/dfd.svg"
function Home (){
    return(
        <div>
            <Navbar />
        <div className="img1">
            <div className="bodyy">
                <h2>Acerca de mí</h2>
                    <div className="line"></div>
                <div className="flex">
                <img src={imgme} alt=""/>
                <p>Mi nombre es Danna Valentina Sanchez Bohorquez, tengo 18 años, vivo en Bogotá, Colombia. Busco desarrollar mis practicas en desarrollo front-end. No cuento con experiencia laboral, debido a que salí del colegio en el 2020 y decidí enfocarme en mis estudios.<br/><br/>
                Empezando con un tecnólogo en producción de multimedia lo cuál me permitirá realizar en un futuro una homologación en la carrera de diseño gráfico o ingeniería de sistemas, complementandolo con  Desarrollo front-end y la convocatoria Misión TIC 2022 en la ruta 2 del gobierno ampliando mis conocimientos en el tema de la programación.<br/><br/> Me apasiona la tecnología, considero que se puede aplicar a muchos sectores hoy en día, lo que permite que sea un tema en constante exploración y avance

                </p>
                </div>
             </div>
             <div className="bodyy">
                <h2>Habilidades</h2>
                    <div className="line"></div>
                <ul>
                    <li>Ingles </li>
                    <li>Creatividad</li>
                    <li>Proactiva</li>
                    <li>Resolución de problemas</li>
                    <li>Trabajo en equipo</li>
                    <li>Actitud para aprender</li>
                </ul>
             </div>
            <div  className="bodyy">
                    <h2>Programas</h2>
                    <div className="line"></div>
                    <div className="programs">
                        <div className="program">
                            <img src={Illustrator}/>
                            <p>Adobe Illustrator</p>
                        </div>  
                        <div className="program">
                            <img src={figma}/>
                            <p>Figma</p>
                        </div> 
                        <div className="program">
                            <img src={Adobe}/>
                            <p>Adobe XD</p>
                        </div> 
                        <div className="program">
                            <img className="group" src={group}/>
                            <p>HTML, CSS y JavaScript</p>
                        </div> 
                        <div className="program">
                            <img src={React}/>
                            <p>React</p>
                        </div>
                        <div className="program">
                            <img className="group" src={office}/>
                            <p>Paquete Office</p>
                        </div>
                        <div className="program">
                            <img src={dfd}/>
                            <p>DFD</p>
                        </div>
                    </div> 
        </div >
        </div> 
            <Footer/>
        </div>
    );
}
export default Home