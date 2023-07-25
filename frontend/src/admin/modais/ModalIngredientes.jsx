import React from 'react';
import { Modal, Button } from 'react-bootstrap';


function ModalIngredientes({ showModal, closeModal }) {
    const initModal = () => {
        closeModal();
    };

    return (
        <div>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Financeiro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label htmlFor="ingredientes">Ingredientes</label>
                        <input type="text" id="ingredientes" name="ingredientes" placeholder="Molho de tomate..."/>
                    </div>
    
                    <div>
                        <label htmlFor="quantidade">Quantidade</label>
                        <input type="text" id="quantidade" name="quantidade" placeholder="2L..." />
                    </div>
                    <div>
                        <label htmlFor="marca">Marca</label>
                        <input type="text" id="marca" name="marca" placeholder="Pomarola"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={initModal}>
                        Fechar
                    </Button>
                    <Button variant="dark" onClick={initModal}>
                        Adicionar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalIngredientes;