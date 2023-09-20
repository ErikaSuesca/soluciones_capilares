import React from "react";
import './Style.css';

function PieDePagina() {
    return (
        <footer className="footer fuente mt-4 bg-dark text-white h-100">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <span>© 2023 copyright</span>
                    <div>
                        <a href="https://es-la.facebook.com/reg/"><i className="fab fa-facebook p-2 text-danger"></i></a>
                        <a href="https://twitter.com/?lang=es"><i className="fab fa-twitter p-2 text-danger"></i></a>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram p-1 text-danger"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default PieDePagina;
