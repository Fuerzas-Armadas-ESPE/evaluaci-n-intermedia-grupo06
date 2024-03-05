import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { supabase } from './supabaseClient';

function ProductRow({ product, onDelete, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [tema, setTema] = useState(product.tema);
    const [pendiente, setPendiente] = useState(product.pendiente);

    async function updateProduct() {
        try {
            const { data, error } = await supabase
                .from("Tema")
                .update({
                    Titulo: name,
                    Objetivo: description,
                    Actividad: tema,
                    Calificacion: pendiente
                })
                .eq("id", product.id);

            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteProduct() {
        try {
            const { data, error } = await supabase
                .from("Tema")
                .delete()
                .eq("id", product.id);

            if (error) throw error;
            onDelete();
        } catch (error) {
            alert(error.message);
        }
    }

    function togglePendiente() {
        setPendiente(!pendiente);
    }

    return (
        <tr className='text-center' style={{backgroundColor: '#D7EAC0'}}>
            <td>{product.Titulo}</td>
            <td>{product.Objetivo}</td>
            <td>{product.Actividad}</td>
            <td>{product.Calificacion}</td>
            <td>
                {/* Agregar la columna "Pendiente" con el checkbox y la lógica para cambiar la palabra */}
                <Form.Check
                    type="checkbox"
                    label={pendiente ? "HECHO" : "POR HACER"}
                    checked={pendiente}
                    onChange={() => togglePendiente()}
                />
            </td>
       
            <td>
                {editing === false ? (
                    <>
                        <Button variant="outline-dark" onClick={() => deleteProduct()}>
                            Eliminar
                        </Button>
                        <Button variant="outline-success" onClick={() => setEditing(true)}>
                            Modificar
                        </Button>
                    </>
                ) : (
                    <>
                        <div style={{ backgroundColor: '#9EB7DB', padding: '4px' }}>
                    <h4 style={{ color: '#FF5733' }}>MODIFICAR TAREA</h4>
                    
                    <br></br>
                    <Form.Group controlId="formBasicName">
                        <Form.Label style={{ color: '#2E86C1' }}>NOMBRE DE LA TAREA</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                borderColor: '#2E86C1',
                                color: '#2E86C1'
                            }}
                        />
                    </Form.Group>
                    <Form.Label style={{ color: '#2E86C1' }}>DESCRIPCION</Form.Label>
                    <Form.Control
                        type="text"
                        id="description"
                        defaultValue={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{
                            borderColor: '#2E86C1',
                            color: '#2E86C1'
                        }}
                    />
                    <Form.Label style={{ color: '#2E86C1' }}>TEMA</Form.Label>
                    <Form.Control
                        type="text"
                        id="tema"
                        defaultValue={tema}
                        onChange={(e) => setTema(e.target.value)}
                        style={{
                            borderColor: '#2E86C1',
                            color: '#2E86C1'
                        }}
                    />
                    <Form.Label style={{ color: '#2E86C1' }}>CALIFICACION</Form.Label>
                    <Form.Control
                        type="text"
                        id="pendiente"
                        defaultValue={pendiente}
                        onChange={(e) => setPendiente(e.target.value)}
                        style={{
                            borderColor: '#2E86C1',
                            color: '#2E86C1'
                        }}
                    />
                    <br></br>
                    <Button variant="outline-success" onClick={() => updateProduct()}>MODIFICAR</Button>
                    <Button variant="outline-dark" onClick={() => setEditing(false)}>ATRAS</Button>
                </div>
                    </>
                )}
            </td>
        </tr>
    );
}

export default ProductRow;
