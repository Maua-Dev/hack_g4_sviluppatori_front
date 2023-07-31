import React from 'react'
import axios from "axios";
import {Container, InputGroup} from 'react-bootstrap';
import {BodyLogin, Card, ContainerLogo,
   ImgLogo, ContainerForm, Button,
   ContainerLogin, Input, InputSvg,
   InputDiv, ContainerCard} from '../admin/styled-components/Login.jsx';
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
        axios.post("http://localhost:3001/login", mensagem).then((res) => {
            document.location.href = "/admin/ingredientes";
        }).catch((err) => {
            alert("Esse usuário não existe!")
        });
        setInputUsername("");
        setInputSenha("");
    }
    return(
      <BodyLogin>
      <Container>
        <ContainerCard>
        <Card>
          <ContainerLogo>
            <ImgLogo
              src="https://media.discordapp.net/attachments/1082483101487333499/1128395434495316089/image.png?width=705&height=662"
              class="brand_logo" alt="Logo"/>
          </ContainerLogo>
        <ContainerForm>
          <form>
            <InputDiv>
            <InputGroup>
              <InputSvg>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: "3.5px", marginLeft:"3.5px"}} width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </InputSvg>
              <Input type="text" name="username" value={inputUsername} class="form-control input_user" onChange={(event) => setInputUsername(event.target.value)} placeholder="username"/>
            </InputGroup>
            </InputDiv>
            <InputDiv>
            <InputGroup>
              <InputSvg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: "3.5px", marginLeft:"3.5px"}} width="32" height="32" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
              </InputSvg>
              <Input type="password" name="password" value={inputSenha} class="form-control input_pass" onChange={(event) => setInputSenha(event.target.value)}  placeholder="password"/>
            </InputGroup>
            </InputDiv>
            <ContainerLogin>
              <Button onClick={() => entrarUsuario()}>Login</Button>
            </ContainerLogin>
          </form>
        </ContainerForm>
        </Card>
        </ContainerCard>
      </Container>
    </BodyLogin>
    )
}

export default Login