import React from 'react'
import './Login.css';

function Login(){
    return(
        <>
        <div>
            <nav className="navbar">
                <a className="navbar-brand" id="header" href="/">Sviluppatori Pizzaria</a>
            </nav>
        </div>
        <div className="container-fluid m-md-4 m-lg-5">
            <div className="row m-md-4 m-lg-5">
                <div className="col-md-5 m-md-4 m-lg-5">
                    <h5 className='d-inline'>Login</h5>
                    <input className="input-info mt-5 me-4 ms-0 d-block" type="email" id="email" placeholder='email'>
                    </input>
                    <input className="input-info mt-4 me-4 ms-0 d-block" type="password" id="senha" placeholder='senha'>
                    </input>
                    <button className="btn mt-5 me-4 ms-0 mb-4 d-block float-end" type="submit">ENTRAR</button>
                </div>
                <div className="col-md-4 m-md-4 m-lg-5 text-center">
                    <h5 className='d-inline titulo'>Sviluppatori Pizzaria</h5>
                    <p className='mt-3 texto'>Descubra uma nova experiência ao solicitar sua deliciosa pizza tradicional.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login