import React from "react";
import aceites from '../img/aceites.jpg';
import shampoo from '../img/shampoo.jpg';
import kit_completo from '../img/kit_completo.jpg';
import './Style.css';

function Introduccion() {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <img src={kit_completo} alt="SolucionesCapilares" className="img-fluid w-50 h-50 rounded-4 col-md-6 order-md-2" />
                    <p className="col-md-6 text-justify fuente  fs-6 order-md-1">
                        "En nuestro sitio web, encontrarás todo lo que necesitas para mantener tu cabello saludable y radiante. Nuestra amplia gama de productos incluye champús y acondicionadores naturales, tratamientos revitalizantes y herramientas de peinado de última generación. Respaldados por la ciencia y formulados con ingredientes de alta calidad, nuestros productos están diseñados para satisfacer las necesidades de todos los tipos de cabello."
                    </p>
                    
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <img src={shampoo} alt="productosCapilares" className="img-fluid w-50 h-50 p-2 rounded-4 col-md-6 order-md-1" />
                    <p className="col-md-6 text-justify fuente order-md-2 fs-6">
                        Explora nuestras secciones dedicadas a cuidados específicos, desde el fortalecimiento y la reparación hasta la hidratación y el estilo. Además, ofrecemos consejos y tutoriales expertos para ayudarte a obtener los mejores resultados. Ya sea que desees darle volumen a tu cabello fino, mantener rizos definidos o restaurar la vitalidad de tu melena, estamos aquí para brindarte soluciones efectivas y de confianza.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <img src={aceites} alt="SolucionesCapilares" className="img-fluid w-50 h-50 rounded-4 col-md-6 order-md-2 " />
                    <p className=" col-md-6 text-justify fuente order-md-1 fs-6">
                        En nuestro compromiso con la belleza capilar, priorizamos la salud, la sostenibilidad y la satisfacción del cliente. Únete a nosotros en este viaje hacia un cabello deslumbrante y descubre el secreto para lucir un cabello hermoso en cada etapa de tu vida."
                    </p>
                   
                </div>
            </div>
        </div>
    )
}

export default Introduccion;