import React from "react";
import MUIDataTable from "mui-datatables";

const DataTable = () => {
  const columns = ["Nombre", "Edad", "Correo", "Ciudad"];
   
  const data = [
    ["Maria Rodriguez", 27, "maria@gmail.com", "Buenos Aires, Argentina"],
    ["Carlos Pérez", 32, "carlos@gmail.com", "Ciudad de México, México"],
    ["Andrés Gómez", 29, "andres@gmail.com", "Bogotá, Colombia"],
    ["Luisa Chavez", 31, "luisa@gmail.com", "Lima, Perú"],
    ["Ana López", 26, "ana@gmail.com", "San José, Costa Rica"],
    ["Javier Ramirez", 30, "javier@gmail.com", "Santiago, Chile"],
    ["Gabriela Mendoza", 28, "gabriela@gmail.com", "Caracas, Venezuela"],
    ["Diego Fernandez", 33, "diego@gmail.com", "Montevideo, Uruguay"],
    ["Carmen Silva", 29, "carmen@gmail.com", "Quito, Ecuador"],
    ["Hector Morales", 31, "hector@gmail.com", "San Salvador, El Salvador"],
    ["Isabel Castro", 27, "isabel@gmail.com", "Tegucigalpa, Honduras"],
    ["Roberto Herrera", 30, "roberto@gmail.com", "Managua, Nicaragua"],
    ["Patricia Torres", 28, "patricia@gmail.com", "Asunción, Paraguay"],
    ["Fernando Guzmán", 35, "fernando@gmail.com", "Guatemala City, Guatemala"],
    ["Rosa Paredes", 29, "rosa@gmail.com", "La Paz, Bolivia"],
    ["Miguel Ruiz", 33, "miguel@gmail.com", "Panamá City, Panamá"],
    ["Alejandra Vargas", 27, "alejandra@gmail.com", "Lisboa, Portugal"],
  ];

  const options = {
    filter: true,
    selectableRows: "none",
    viewColumns: false,
  };

  return (
    <MUIDataTable
      title={"HUMAN RESORCES"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default DataTable;
