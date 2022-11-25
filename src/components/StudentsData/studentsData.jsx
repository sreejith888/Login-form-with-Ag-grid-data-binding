import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
import "./studentsData.css";
import Modal from "../../Framework/Modal/Modal";

function StudentsData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setData(response.data);
      } catch (errror) {
        console.error(Error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const columnDefs = [
    { headerName: "ID", field: "id", width: 200 },
    { headerName: "Name", field: "name", width: 200 },
    { headerName: "Email", field: "email", width: 200 },
    { headerName: "Body", field: "body", width: 200 },
  ];
  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  };

  const openModel = () => {
    setModalOpen(true);
    console.log("clicked");
  };
  return (
    <div className="StudentsData">
      <div className="head">
        <h2>Student Details</h2>
        <button
          className="btn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add +
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>

      <div className="ag-theme-alpine" style={{ height: "600px" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={data}
          defaultColDef={defaultColDef}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default StudentsData;
