import react from 'react';
import {Body} from '../styled-components/Body';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {BotoesDiv, Botao, Redirecionar} from '../recepcionista/styled-components/Botoes';
import {Pedido} from '../recepcionista/styled-components/Pedidos';

function PedidosRecepcionista(){
    return(
        <Body>
            <Container fluid>
                <Row>
                    <Col xs={2}  style={{paddingLeft: "0px"}}>
                        <BotoesDiv>
                            <Botao>
                                <Redirecionar href="../recepcionista/mesas">Mesas</Redirecionar>
                            </Botao>
                            <Botao>
                                <Redirecionar href="../recepcionista/pedidos">Pedidos</Redirecionar>
                            </Botao>
                        </BotoesDiv>
                    </Col> 
                    <Col xs={3}>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                    </Col>
                    <Col xs={3}>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                    </Col>
                    <Col xs={3}>
                    <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido 1</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                    </Col>
                </Row>
            </Container>
        </Body>
    )
}

export default PedidosRecepcionista