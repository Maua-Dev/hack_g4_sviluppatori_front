import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login'
import AdminFinanceiro from './AdminFinanceiro';
import AdminIngredientes from './AdminIngredientes';
import AdminFeedback from './AdminFeedback';
import Cardapio from './Cardapio';
import Pagamento from './Pagamento';
import GarcomPedidos from './GarcomPedidos';
import GarcomMesas from './GarcomMesas';
import PizzaioloPedidos from './PizzaioloPedidos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route index path="/" element={<App />}/>
    <Route path="/login" element={<Login />} />
    <Route path="/admin/financeiro" element={<AdminFinanceiro />} />
    <Route path="/admin/ingredientes" element={<AdminIngredientes />} />
    <Route path="/admin/feedback" element={<AdminFeedback />} />
    <Route path="/cardapio" element={<Cardapio />} />
    <Route path="/pagamento" element={<Pagamento />} />
    <Route path="/garcom/pedidos" element={<GarcomPedidos />} />
    <Route path="/garcom/mesas" element={<GarcomMesas />} />
    <Route path="/pizzaiolo/pedidos" element={<PizzaioloPedidos />} />
  </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
