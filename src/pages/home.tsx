import React from 'react';
import {
    Link
  } from "react-router-dom";
import Logo from '../resource/img/logo.png'

const Home  = () => {
        return (
            <>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 offset-md-3 text-center">
                           <section className="section-home">
                                <img src={Logo} alt="Logo of NivantissApp" />
                                <h1 className="title">NIVANTISSAPP</h1>
                                <h5 className="subtitle">L'outil qui révolutionnera votre quotidien </h5>
                                <Link to="/search"><button className="btn btn-light">Entrez dans l'application</button> </Link>
                           </section>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Home;