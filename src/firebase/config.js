import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";
import { listAll, getDownloadURL, getMetadata } from 'firebase/storage';
import {v4} from 'uuid';


const firebaseConfig = {
    apiKey: "AIzaSyCTD2n_Zwkre4lEncbchOoGE09YOOYo0sI",
    authDomain: "operations-404200.firebaseapp.com",
    projectId: "operations-404200",
    storageBucket: "operations-404200.appspot.com",
    messagingSenderId: "276177464617",
    appId: "1:276177464617:web:08eab2f64056aaaebe5b38"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Función para subir un archivo
export function uploadFile(file) {
    const storageRef = ref(storage, `uploads/${file.name}`);
    return uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log('Archivo subido:', snapshot);
      })
      .catch((error) => {
        console.error('Error al subir el archivo:', error);
      });
  }
  
  export async function listFiles() {
    const listRef = ref(storage, 'uploads/');
  
    try {
      const items = await listAll(listRef);
  
      // Mapea los objetos de metadatos de elementos a sus detalles
      const itemPromises = items.items.map(async (itemRef) => {
        const downloadUrl = await getDownloadURL(itemRef);
        const metadata = await getMetadata(itemRef);
  
        return {
          name: itemRef.name,
          downloadUrl,
          isFolder: itemRef.fullPath.endsWith('/'),
          size: metadata.size,
          contentType: metadata.contentType,
          updated: new Date(metadata.updated).toLocaleString(),
        };
      });
  
      // Espera todas las promesas y devuelve la lista de elementos (archivos y carpetas)
      const files = await Promise.all(itemPromises);
      console.log('Lista de archivos actualizada:', files); // Agrega este log
  
      return files;
    } catch (error) {
      console.error('Error al listar archivos y carpetas:', error);
      return [];
    }
  }
  
  
  // Función para eliminar un archivo
  export function deleteFile(fileName) {
    const fileRef = ref(storage, `uploads/${fileName}`);
  
    return deleteObject(fileRef)
      .then(() => {
        console.log(`Archivo "${fileName}" eliminado exitosamente`);
      })
      .catch((error) => {
        console.error(`Error al eliminar el archivo "${fileName}":`, error);
      });
  }