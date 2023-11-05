import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function DeleteConfirmationModal({ open, handleClose, handleConfirmDelete, fileName }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirmar eliminación</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Seguro que quieres eliminar el archivo "{fileName}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleConfirmDelete} color="primary">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmationModal;
