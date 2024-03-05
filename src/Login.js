import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

// Importa tu imagen
import imagenLogo from '../src/img/imagenLogo.png';

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await supabase.auth.signIn({
        email,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "18rem", backgroundColor: "#f5efbf", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Aquí agregamos la imagen */}
          <img src={imagenLogo} alt="Logo" style={{ width: "50%", marginBottom: "20px" }} />
          <Card.Title style={{ textAlign: "center", color: "#333" }}>Login</Card.Title>
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="usuario@hotmail.com"
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
              />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button variant="contained" type="submit" style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}>
                Enviar <SendIcon style={{ marginLeft: "5px" }} />
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
