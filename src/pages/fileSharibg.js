import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { uploadFile, listFiles, deleteFile , storage} from '../firebase/config'; // Importa la función para listar archivos
import ResponsiveAppBar from '../components/menu';
import WhatsAppButton from '../components/Whatsapp';
import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import fileDownload from 'js-file-download';
import { ref } from "firebase/storage";
import DeleteConfirmationModal from '../components/AlertDialog';


const FileSharing = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [fileToDelete, setFileToDelete] = useState(null);
  
    useEffect(() => {
      listFiles().then((files) => {
        setFileList(files);
      });
    }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadFile = () => {
    if (selectedFile) {
      // Subir el archivo
      uploadFile(selectedFile).then(() => {
        // Actualizar la lista de archivos después de cargar uno nuevo
        listFiles().then((files) => {
          setFileList(files);
          console.log('files', files)
        });

        // Resetear el estado
        setSelectedFile(null);
      });
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
  };

  

  const columns = ["Nombre del Archivo", "Tamaño", "Tipo de Contenido", "Fecha de Modificación", "Acciones"];
  const data = fileList.map((file) => [
    file.name,
    file.size ? `${file.size} bytes` : 'N/A',
    file.contentType || 'N/A',
    file.updated ? new Date(file.updated).toLocaleString() : 'N/A',
    <div>
      <IconButton color="primary" onClick={() => handleDownload(file.downloadUrl, file.name)}>
        <CloudDownloadIcon />
      </IconButton>
      <IconButton color="secondary" onClick={() => handleDelete(file.name)}>
        <DeleteIcon />
      </IconButton>
    </div>
  ]);
  

  const options = {
    filter: true,
    selectableRows: "none",
    viewColumns: false,
  };

  const handleDownload = (url, fileName) => {
    // Abre el enlace en una nueva ventana
    const newWindow = window.open(url, '_blank');
  
    // Espera un breve retraso y luego cierra la ventana
    setTimeout(() => {
      newWindow.close();
    }, 1000); // Puedes ajustar el tiempo de espera según tus necesidades
  };

  const handleDelete = (fileName) => {
    setFileToDelete(fileName);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (fileToDelete) {
      const fileName = fileToDelete;
      const fileRef = ref(storage, `uploads/${fileName}`);

      deleteFile(fileName)
        .then(() => {
          console.log(`Archivo "${fileName}" eliminado exitosamente`);
          setDeleteModalOpen(false); // Cierra el modal de confirmación
          // La lista debería actualizarse automáticamente
          listFiles().then((files) => {
            setFileList(files);
            console.log('Lista de archivos actualizada:', files); // Agrega este log
          });
        })
        .catch((error) => {
          console.error(`Error al eliminar el archivo "${fileName}":`, error);
        });
    }
  };

  return (
    <div>
      <ResponsiveAppBar />
      <WhatsAppButton />
      <div style={{ margin: "50px" }}>
        <form>
            <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            />
            <label htmlFor="fileInput">
            <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
            >
                Seleccionar Archivo
            </Button>
            </label>
        </form>
      <TextField
        label="Archivo seleccionado"
        value={selectedFile ? selectedFile.name : 'Ningún archivo seleccionado'}
        InputProps={{ readOnly: true }}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUploadFile}
        disabled={!selectedFile}
      >
        Subir archivo
      </Button>
      {selectedFile && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClearFile}
          startIcon={<DeleteIcon />}
        >
          Borrar
        </Button>
      )}
      {/* Lista de archivos en forma de tabla */}
      <Paper>
        <MUIDataTable
          title={"Archivos Subidos"}
          data={data}
          columns={columns}
          options={options}
        />
      </Paper>
      </div>
      <DeleteConfirmationModal
        open={isDeleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
        handleConfirmDelete={handleConfirmDelete}
        fileName={fileToDelete}
      />
    </div>
  );
};

export default FileSharing;
