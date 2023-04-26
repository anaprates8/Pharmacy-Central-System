import { Card, Col, Button, Modal, Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import { useAppContext } from '../contexts/useAppContext';
import { useState } from 'react';

function ListaMedicamentos() {
  const { medicamentos } = useAppContext();
  const [show, setShow] = useState(false);

return (
<section> 
  <NavBar /> 
  <Container>
  <form class="d-flex" role="search">
        <input className="form-control col-6 me-2" type="search" placeholder="Digite o nome do medicamento aqui" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Pesquisar</button>
      </form>
  <h2>Medicamentos Cadastrados</h2>
  <div className='cards'>
  {medicamentos.map(medicamento => (
    <div key={medicamento.dados}>
      <Card style={{ width: '15rem' , height: '20rem' }}>
      <Card.Img variant="top" src="src\assets\caixa.png" />
      <div className='titulo'>
      <Card.Title>{medicamento.medicamento} {medicamento.dosagem}</Card.Title>
      <Card.Title>{medicamento.preço}</Card.Title></div>
      <Col xs={6}>
      <Button onClick={() => setShow(true)}>Descrição</Button>
      </Col>
    </Card>
          <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Descrição
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          {medicamento.tipo}<br />
          {medicamento.laboratório}<br />
          {medicamento.descrição}
          </>
        </Modal.Body>
      </Modal>
    </div>
     ))}
     </div>
     </Container>
    </section>
  );
 }
export default ListaMedicamentos;