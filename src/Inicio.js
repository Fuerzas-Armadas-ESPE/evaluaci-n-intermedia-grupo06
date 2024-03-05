import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

// Importa la imagen
import backgroundImage from '../src/img/sello.jpg';

function Inicio() {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '110vh'}}>
      <Container className="mt-5">
        <Row className="justify-content-md-center text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '30px'}}>
          <Col md="8" style={{backgroundColor: 'rgba(248, 249, 250, 0.8)', padding: '20px'}}>
            <h1 className="display-4" style={{color: '#dc3545'}}>Bienvenido a la Gestión de Curso para Docentes</h1>
            <p className="lead" style={{color: '#28a745'}}>Aplicacion de conocimientos de la Materia</p>
            <h2 style={{color: '#007bff'}}>Integrantes: Chora Liliana, Jacome Ivonne, Moreno Douglas</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Inicio;
