import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalFinanceiro({ showModal, closeModal }) {
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
                        <label htmlFor="identificacao">Identificação</label>
                        <input type="text" id="identificacao" name="identificacao" placeholder="Fornecedor..."/>
                    </div>
    
                    <div>
                        <label htmlFor="quantia">Quantia:</label>
                        <input type="text" id="quantia" name="quantia" placeholder="R$520..." />
                    </div>
                    <div>
                        <label htmlFor="status">Status</label>
                        <input type="text" id="status" name="status" placeholder="Pix..."/>
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

export default ModalFinanceiro;
