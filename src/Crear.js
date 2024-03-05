import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { supabase } from './supabaseClient';
import actividadcrear from '../src/img/actividad.png';

function Crear() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tema, setTema] = useState("");

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("Tema")
        .insert({
          Titulo: name,
          Objetivo: description,
        })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} md={8} lg={6}>
          <div className="border p-4 rounded text-center">
            <img src={actividadcrear} alt="actividadcrear" style={{ width: '20%', borderRadius: '10px' }} />
            <h3 className="mb-4">Crear Actividad</h3>
            <Form>
              <Form.Group controlId="name">
                <Form.Label className="mb-1">Tema</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label className="mb-1">Objetivo de la Actividad</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="tema">
                <Form.Label className="mb-1">Actividad del Tema</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setTema(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="success" type="button" onClick={() => createProduct()} className="mt-3">
                Crear
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Crear;
