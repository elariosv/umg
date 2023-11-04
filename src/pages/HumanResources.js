import React, { useState } from "react";
import DataTable from "../components/DataTables";
import '../styles/menu.scss'
import {
  Typography,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import ResponsiveAppBar from "../components/menu";
import WhatsAppButton from "../components/Whatsapp";

const HumanResources = () => {
  const [openModal, setOpenModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateResource = () => {
    // Accede a los valores desde los estados locales
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Correo:", correo);
    console.log("Ubicación:", ubicacion);
    // Realiza la lógica de creación del recurso utilizando estos valores
    // Luego, cierra el modal
    handleCloseModal();
  };

  return (
    <div>
      <ResponsiveAppBar />
      <WhatsAppButton />
      <div style={{ margin: "50px" }}>
        <Typography variant="h5" gutterBottom>
          Recursos Humanos
        </Typography>
        {/* <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Agregar Recurso
        </Button> */}
        <Card>
          <CardContent>
            <Typography variant="body1">
              Bienvenido al módulo de Recursos Humanos. Aquí puedes administrar los recursos de la empresa.
            </Typography>
          </CardContent>
        </Card>
        <DataTable />
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Agregar Nuevo Recurso</DialogTitle>
          <DialogContent>
            <TextField
              label="Nombre"
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <TextField
              label="Edad"
              fullWidth
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
            <TextField
              label="Correo"
              fullWidth
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <TextField
              label="Ubicación"
              fullWidth
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleCreateResource} color="primary">
              Crear Recurso
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default HumanResources;
