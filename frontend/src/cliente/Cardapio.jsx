import React, { useState } from 'react';
import './Cardapio.css';
import "../cliente/fontes.css"
import { Body } from './styled-components/BodyCardapio';
import { TextoCard, TituloCard} from './styled-components/Card';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Blueprint from "../garcom/imgs/Pizza_Pepperoni.png";

function Cardapio() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const menuOptions = ['Entradas', 'Bebidas', 'Pizzas', 'Sobremesas'];
  const menuItems = [{
    name: 'Pizza de Calabresa',
    price: 30.00,
    description: 'Pizza de calabresa com queijo, molho de tomate e orégano.',
  }, {
    name: 'Pizza de Frango',
    price: 30.00,
    description: 'Pizza de frango com queijo, molho de tomate e orégano.',
    }, {
    name: 'Pizza de Marguerita',
    price: 30.00,
    description: 'Pizza de marguerita com queijo, molho de tomate e orégano.',
    }, {
    name: 'Pizza de Pepperoni',
    price: 30.00,
    description: 'Pizza de pepperoni com queijo, molho de tomate e orégano.',
    }, {
    name: 'Pizza de Portuguesa',
    price: 30.00,
    description: 'Pizza de portuguesa com queijo, molho de tomate e orégano.',
    }];
    

  const handleMenuItemClick = (index) => {
    setSelectedMenu(index);
  };

  const handleMenuItemSelect = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleConfirmOrder = () => {
    console.log('Pedido confirmado:', selectedItems);
  };

  const navigateTo = useNavigate();

  function navegarPagamento() {
    navigateTo("/pagamento");
  }

  return (
    <Body>
      <h1>Menu de Pizzas</h1>
    
    <Container fluid style={{paddingLeft: "0px"}}>
        <Row>
            <Col xs={2}>
                <div className="actions-container">
                    <button className="action-button">Chamar Garçom</button>
                    <button className="action-button" onclick={navegarPagamento}>Efetuar Pagamento</button>
                    <button className="action-button">Verificar Conta Atual</button>
                </div>
            </Col>
            <Col xs={8}>
                <div className="menu-container">
                    <ul className="menu-list">
                    {menuOptions.map((option, i) => (
                        <li
                            key={i}
                            className={`menu-item  ${
                            selectedMenu === i ? 'active' : ''
                            }`}
                            onClick={() => handleMenuItemClick(i)}
                        >
                            {option}
                        </li>
                    ))} 
                    </ul>
                </div>
                    {selectedMenu !== null && (
                    <div className="menu-content">
                        {menuItems.map((item, index) => (
                          ((index + 1) % 5 === 0) ? (
                            <div key={index} className="menu-row">
                                
                              <Card style={{ backgroundColor: "#abb78b", border: "0px", cursor: "pointer" }} onClick={() => handleMenuItemSelect(item.name)}>
                                <Card.Img src={Blueprint} style={{ width: "160px", marginLeft: "16px" }} alt="Pizza" />
                                <Card.Body>
                                  <Card.Text>
                                    <TituloCard>
                                        {item.name}
                                    </TituloCard>
                                    <TextoCard>
                                        {item.description}
                                    </TextoCard>
                                    <TextoCard>
                                        R$ {item.price}
                                    </TextoCard>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                                
                            </div>
                          ) : (
                            
                            <Card   style={{backgroundColor: "#abb78b",border: "0px", cursor: "pointer"}} onClick={() => handleMenuItemSelect(item.name)}>
                            <Card.Img src={Blueprint} style={{ width: "160px", marginLeft: "16px" }} alt="Pizza" />
                            <Card.Body>
                              <Card.Text>
                                <TituloCard>
                                    {item.name}
                                </TituloCard>
                                <TextoCard>
                                    {item.description}
                                </TextoCard>
                                <TextoCard>
                                    R$ {item.price}
                                </TextoCard>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                            
                          )))}
                  </div>)}
            </Col>
            <Col xs={2}>
                <div className="order-container">
                    <h4>Pedido:</h4>
                    <ul>
                    {selectedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                    <button className="confirm-button" onClick={handleConfirmOrder}>
                    Confirmar Pedido
                    </button>
                </div>
            </Col>
        </Row>
    </Container>
    </Body>
  );
}

export default Cardapio