import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, Button, Offcanvas } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaHome, FaList, FaPlus, FaSignInAlt } from 'react-icons/fa';

import Productos from '../Productos';
import Crear from '../Crear';
import Inicio from '../Inicio';
import Login from '../Login';

function Navegacion() {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  return (
    <Router>
      <Button variant="dark" onClick={handleSidebarToggle} style={{ position: 'absolute', top: 10, left: 10 }}>
        ☰
      </Button>

      <Container fluid style={{ marginLeft: '50px' }}>
        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>SISTEMA DOCENTES - GRUPO06</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Item>
                <Link to="/inicio" className="nav-link" onClick={handleSidebarToggle}>
                  <FaHome /> Inicio
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/productCard" className="nav-link" onClick={handleSidebarToggle}>
                  <FaList /> Actividades
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/crear" className="nav-link" onClick={handleSidebarToggle}>
                  <FaPlus /> Crear Actividad
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/" className="nav-link" onClick={handleSidebarToggle}>
                  <FaSignInAlt /> Login
                </Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <main>
          <Routes>
            <Route path="/productCard" element={<Productos />} />
            <Route path="/crear" element={<Crear />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </main>
      </Container>
    </Router>
  );
}

export default Navegacion;
