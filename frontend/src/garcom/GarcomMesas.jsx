import React from 'react';
import {Body} from '../styled-components/Body';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BotoesDiv, Botao, Redirecionar} from '../recepcionista/styled-components/Botoes';
import axios from 'axios';


function GarcomMesas(){
    const [mesas, setMesas] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3001/mesas')
        .then((response) => {
            setMesas(response.data.filter((mesa) => mesa.chamada == false))
        })});

    return(
        <Body>
            <Container fluid>
                <Row>
                    <Col xs={2}  style={{paddingLeft: "0px"}}>
                        <BotoesDiv>
                            <Botao>
                                <Redirecionar href="../garcom/mesas">Mesas</Redirecionar>
                            </Botao>
                            <Botao>
                                <Redirecionar href="../garcom/pedidos">Pedidos</Redirecionar>
                            </Botao>
                        </BotoesDiv>
                    </Col> 
                    {
                    mesas.map((mesa,i) => (
                        ((i + 1) % 3 === 0) ? (
                        <Row>    
                            <Col xs={4} key={i}>
                                <Card style={{
                                    margin: '1rem',
                                    width: '18rem',
                                }}>
                                    <Card.Header style={{
                                        backgroundColor: 'white',
                                        borderBottom: '1px solid black',
                                        display: "inline-block",
                                        fontWeight: 'bold',
                                        fontSize: '2rem'
                                    }}>Mesa {mesa.numero}</Card.Header>
                                    <Card.Body>
                                        <Button variant="success">Atendida</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        ) : (
                            <Col xs={4} key={i}>
                            <Card style={{
                                margin: '1rem',
                                width: '18rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Mesa {mesa.numero}</Card.Header>
                                <Card.Body>
                                    <Button variant="success">Atendida</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    ))}
                </Row>
            </Container>
        </Body>
    )
}

export default GarcomMesas