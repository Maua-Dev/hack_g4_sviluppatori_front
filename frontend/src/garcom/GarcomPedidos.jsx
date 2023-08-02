import React from 'react';
import {Body} from '../styled-components/Body';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BotoesDiv, Botao, Redirecionar} from '../recepcionista/styled-components/Botoes';
import {Mesa} from '../garcom/styled-components/Mesas';
import axios from 'axios';


function GarcomPedidos(){
    const [pedidos, setPedidos] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3001/pedidos')
        .then((response) => {
            const pedidosFiltrados = response.data.filter((pedido) => pedido.status === "Pronto");
            setPedidos(pedidosFiltrados);
        }).catch((error) => {
            console.log(error);
        })});
    return(
        <div>
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
                    <Col xs={3}>
                        {pedidos.map((pedido,i) => (
                            <Mesa key={i}>
                                <Card style={{
                                    margin: '1rem',
                                }}>
                                    <Card.Header style={{
                                        backgroundColor: 'white',
                                        borderBottom: '1px solid black',    
                                        display: "inline-block",
                                        fontWeight: 'bold',
                                        fontSize: '2rem'
                                    }}>Pedido {pedido.id}</Card.Header>
                                    <Card.Body>
                                        <Card.Text style={{borderBottom: "1px solid #1A623C"}}>
                                            {pedido.produtos.map((produto, i) => (
                                                <div key={i}>
                                                    {produto}
                                                </div>
                                            ))}
                                        </Card.Text>
                                        <Button variant="success">Entregue</Button>
                                    </Card.Body>
                                </Card>
                            </Mesa>
                        ))}
                    </Col>
                </Row>
            </Container>
        </Body>
        </div>
    )
}

export default GarcomPedidos