import React, { useState } from 'react';
import './Cardapio.css';
import "../cliente/fontes.css"
import { Body } from './styled-components/BodyCardapio';
import { TextoCard, TituloCard} from './styled-components/Card';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Blueprint from "../garcom/imgs/Pizza_Pepperoni.png";
import axios from 'axios';

function Cardapio() {
  const [loading, setLoading] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const menuOptions = ['Entradas', 'Bebidas', 'Pizzas', 'Sobremesas'];
  const [entradas, setEntradas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  
  React.useEffect(() => {
    axios.get('http://localhost:3001/produtos')
      .then((response) => {
        setEntradas(response.data.filter((produto) => produto.tipo === "Entradas"));
        setBebidas(response.data.filter((produto) => produto.tipo === "Bebidas"));
        setPizzas(response.data.filter((produto) => produto.tipo === "Pizzas"));
        setSobremesas(response.data.filter((produto) => produto.tipo === "Sobremesas"));
        setLoading(false);
        setMenuItems(response.data.filter((produto) => produto.tipo === "Entradas"));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMenuItemClick = (index) => {
    setSelectedMenu(index);
  };

  React.useEffect(() => {
    switch (selectedMenu) {
      case 0: 
        setMenuItems(entradas);
        break;
      case 1: 
        setMenuItems(bebidas);
        break;
      case 2: 
        setMenuItems(pizzas);
        break;
      case 3:
        setMenuItems(sobremesas);
        break;
      default:
        setMenuItems([]);
        break;
    }
  }, [selectedMenu, entradas, bebidas, pizzas, sobremesas]);

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
                                
                              <Card style={{ backgroundColor: "#abb78b", border: "0px", cursor: "pointer", marginBottom: "16px" }} onClick={() => handleMenuItemSelect(item.name)}>
                                <Card.Img src={Blueprint} style={{ width: "160px", marginLeft: "16px" }} alt="Pizza" />
                                <Card.Body>
                                  <Card.Text>
                                    <TituloCard>
                                        {item.nome}
                                    </TituloCard>
                                    <TextoCard>
                                        {item.descricao}
                                    </TextoCard>
                                    <TextoCard>
                                        R$ {item.preco}
                                    </TextoCard>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                                
                            </div>
                          ) : (
                            
                            <Card   style={{backgroundColor: "#abb78b",border: "0px", cursor: "pointer", marginBottom: "16px"}} onClick={() => handleMenuItemSelect(item.name)}>
                            <Card.Img src={Blueprint} style={{ width: "160px", marginLeft: "16px" }} alt="Pizza" />
                            <Card.Body>
                              <Card.Text>
                                <TituloCard>
                                    {item.nome}
                                </TituloCard>
                                <TextoCard>
                                    {item.descricao}
                                </TextoCard>
                                <TextoCard>
                                    R$ {item.preco}
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