import React from 'react'
import style from './stylesheets/login.module.css';
import axios from "axios";

function Login(){
    const [inputUsername, setInputUsername] = React.useState("");
    const [inputSenha, setInputSenha] = React.useState("");

    function entrarUsuario(){
        let mensagem = {}
        if (inputUsername === "" || inputSenha === ""){
            mensagem = {
                titulo: "Erro",
            }
        }
        else{
            mensagem = {
                username: inputUsername,
                senha: inputSenha,
            }  
        }
        setInputUsername("");
        setInputSenha("");
        axios.post("http://localhost:3001/login", mensagem).then((res) => {
            document.location.href = "/admin/ingredientes";
        }).catch((err) => {
            alert("Esse usuário não existe!")
        });
    }
    
    function cadastrarUsuario(){
        let mensagem = {}
        if (inputUsername === "" || inputSenha === ""){
            mensagem = {
                titulo: "Erro",
            }
        }
        else{
            mensagem = {
                username: inputUsername,
                senha: inputSenha,
            }  
        }
        setInputUsername("");
        setInputSenha("");
        axios.post("http://localhost:3001/signup", mensagem).then((res) => {
            if(res.data !== ""){
                alert("Esse usuário já existe!")
            }
            else{
                alert("Usuário cadastrado com sucesso!")
                document.location.href = "/admin/ingredientes";
            }
        }).catch((err) => {
            alert("Erro ao cadastrar usuário")
        })
    }

    return(
        <>
        <div>
            <nav className={style["navbar"]}>
                <a className={style["navbar-brand"]} id="header" href="/">Sviluppatori Pizzaria</a>
            </nav>
        </div>
        <div className="container-fluid m-md-4 m-lg-5">
            <div className="row m-md-4 m-lg-5">
                <div className="col-md-5 m-md-4 m-lg-5">
                    <h5 className='d-inline'>Login</h5>
                    <input className="input-info mt-5 me-4 ms-0 d-block" value={inputUsername} onChange={(event) => setInputUsername(event.target.value)} type="email" id="email" placeholder='email'>
                    </input>
                    <input className="input-info mt-4 me-4 ms-0 d-block" value={inputSenha} onChange={(event) => setInputSenha(event.target.value)} type="password" id="senha" placeholder='senha'>
                    </input>
                    <button className="btn mt-5 me-4 ms-0 mb-4 d-block float-end" id={style["btn"]} type="submit" onClick={() => cadastrarUsuario()}>Signup</button>
                    <button className="btn mt-5 me-4 ms-0 mb-4 d-block float-end" id={style["btn"]} type="submit" onClick={() => entrarUsuario()}>Login</button>
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